'use client';

import { z } from 'zod';
import {
  Button,
  FileUploader,
  useToast,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
  Label,
} from 'ui';
import { useEffect, useState, type FC } from 'react';
import Image from 'next/image';
import { AppForm } from '../../../components/form/AppForm';
import { fetchUser, updateUserAvatar, updateUserProfile } from '../actions';
import { FormInputField } from '../../../components/form/FormInputField';

const profileFormSchema = z.object({
  name: z.string().optional().nullable(),
  email: z
    .string({
      invalid_type_error: 'Email is required',
      required_error: 'Email is required.',
    })
    .email({
      message: 'Invalid email.',
    })
    .optional()
    .nullable(),
});

async function uploadAvatar(file?: Blob) {
  if (!file) {
    return { data: null, error: new Error('No file provided') };
  }
  const reader = new FileReader();
  reader.onloadend = async () => {
    const base64 = reader.result as string;
    await updateUserAvatar(base64);
  };
  reader.readAsDataURL(file);
}

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export const ProfileForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [avatarUrl, setAvatarUrl] = useState<File[] | null>(null);
  const [defaultAvatarUrl, setDefaultAvatarUrl] = useState<string | null>(null);
  const [defaultValues, setDefaultValues] = useState<ProfileFormValues>({
    name: '',
    email: '',
  });

  const onSubmit = async ({ email, name }: ProfileFormValues) => {
    setIsLoading(true);

    await uploadAvatar(avatarUrl && avatarUrl[0] ? avatarUrl[0] : undefined);

    const values = {
      email: email ? email : undefined,
      name: name ? name : undefined,
    };

    const { error } = await updateUserProfile(values);

    try {
      if (error) {
        toast({
          title: error.message,
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Profile updated!',
        description: 'Your profile has been updated successfully.',
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const dropzone = {
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
    },
    multiple: true,
    maxFiles: 1,
    maxSize: 1 * 1024 * 1024,
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    async function fetchUserData() {
      const { data: user, error } = await fetchUser();

      if (error) {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred. Please try again.',
          variant: 'destructive',
        });
        return;
      }
      if (user) {
        setDefaultValues({
          name: user.name,
          email: user.email,
        });
        setDefaultAvatarUrl(user.avatar_url ? user.avatar_url : null);
      }
    }

    void fetchUserData();
  }, [isLoading, toast]);

  return (
    <AppForm onSubmit={onSubmit} schema={profileFormSchema}>
      <div className='flex min-h-0 flex-1 flex-col gap-4'>
        {defaultAvatarUrl ? (
          <Image
            alt={defaultAvatarUrl}
            className='min-h-24 self-center rounded-xl'
            height={256}
            src={defaultAvatarUrl}
            width={256}
          />
        ) : null}
        <FileUploader
          className='bg-background min-h-16 relative rounded-lg p-2'
          dropzoneOptions={dropzone}
          onValueChange={setAvatarUrl}
          reSelect
          value={avatarUrl}
        >
          <Label className='mb-2'>Profile Picture</Label>
          <FileInput className='p-8 outline-dashed'>
            <div className='flex w-full flex-col items-center justify-center pb-4 pt-3'>
              <FileSvgDraw />
            </div>
          </FileInput>
          <FileUploaderContent className='h-48'>
            {avatarUrl && avatarUrl[0] ? (
              <FileUploaderItem className='h-32' index={0}>
                {avatarUrl[0].name}
              </FileUploaderItem>
            ) : null}
          </FileUploaderContent>
        </FileUploader>
        {avatarUrl && avatarUrl[0] ? (
          <Image
            alt={avatarUrl[0].name}
            className='aspect-square h-auto w-auto'
            height={512}
            src={URL.createObjectURL(avatarUrl[0])}
            width={512}
          />
        ) : null}

        <FormInputField<ProfileFormValues>
          defaultValue={defaultValues.name ? defaultValues.name : undefined}
          label='Name'
          path='name'
          placeholder='Your name'
          type='name'
        />
        <FormInputField<ProfileFormValues>
          defaultValue={defaultValues.email ? defaultValues.email : undefined}
          label='Email'
          path='email'
          placeholder='Your email'
          type='email'
        />

        <Button loading={isLoading} type='submit'>
          Save
        </Button>
      </div>
    </AppForm>
  );
};

const FileSvgDraw = () => {
  return (
    <>
      <svg
        aria-hidden='true'
        className='mb-3 h-8 w-8 text-gray-500 dark:text-gray-400'
        fill='none'
        viewBox='0 0 20 16'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        />
      </svg>
      <p className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
        <span className='font-semibold'>Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className='text-xs text-gray-500 dark:text-gray-400'>
        SVG, PNG, JPG or GIF
      </p>
    </>
  );
};
