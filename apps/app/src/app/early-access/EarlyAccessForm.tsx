'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, type FC } from 'react';
import { z } from 'zod';
import { Button, useToast } from 'ui';
import { v4 as uuidv4 } from 'uuid';
import { getDictionary } from '../i18n';
import { AppForm } from '../../components/form/AppForm';
import { FormInputField } from '../../components/form/FormInputField';
import { FormSelect } from '../../components/form/FormSelect';
import createSupabaseClientClient from '../../../lib/supabase/client';

export const EarlyAccessForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') ?? 'en';
  const dictionary = getDictionary(lang);
  const { toast } = useToast();
  const router = useRouter();
  const earlyAccessFormSchema = z.object({
    name: z.string().optional().nullable(),
    email: z
      .string({
        invalid_type_error: dictionary.earlyAccess.form.email.required_error,
        required_error: dictionary.earlyAccess.form.email.required_error,
      })
      .email({
        message: dictionary.earlyAccess.form.email.invalid_email_error,
      }),
    country: z.string().optional().nullable(),
    company: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
  });

  type EarlyAccessFormValues = z.infer<typeof earlyAccessFormSchema>;

  const onSubmit = async (data: EarlyAccessFormValues) => {
    setIsLoading(true);
    const supabase = createSupabaseClientClient();

    const earlyAccessId = uuidv4();
    await supabase.from('early_access').insert([
      {
        id: earlyAccessId,
        name: data.name,
        email: data.email,
        country: data.country,
        company: data.company,
        phone: data.phone,
      },
    ]);
    toast({
      title: dictionary.earlyAccess.form.submit_success,
    });
    setTimeout(() => {
      router.push(`/early-access/${earlyAccessId}`);
    }, 1000);

    setIsLoading(false);
  };

  return (
    <AppForm
      defaultValues={{
        name: '',
        email: '',
        country: '+86',
        company: '',
        phone: '',
      }}
      onSubmit={onSubmit}
      schema={earlyAccessFormSchema}
    >
      <div className='flex flex-col gap-6 py-4 md:px-16'>
        <div className='grid grid-cols-2 gap-3'>
          <FormInputField<EarlyAccessFormValues>
            label={dictionary.earlyAccess.form.name.label}
            path='name'
            placeholder={dictionary.earlyAccess.form.name.placeholder}
          />
          <FormInputField<EarlyAccessFormValues>
            label={dictionary.earlyAccess.form.company.label}
            path='company'
            placeholder={dictionary.earlyAccess.form.company.placeholder}
          />
        </div>
        <div className='grid grid-cols-4 gap-3'>
          <FormSelect<EarlyAccessFormValues>
            label={dictionary.earlyAccess.form.country.label}
            options={[
              { value: '+1', label: '🇺🇸 (+1)' },
              { value: '+86', label: '🇨🇳 (+86)' },
            ]}
            path='country'
            placeholder={dictionary.earlyAccess.form.country.placeholder}
          />
          <div className='col-span-3 grid'>
            <FormInputField<EarlyAccessFormValues>
              label={dictionary.earlyAccess.form.phone.label}
              path='phone'
              placeholder={dictionary.earlyAccess.form.phone.placeholder}
              type='tel'
            />
          </div>
        </div>
        <FormInputField<EarlyAccessFormValues>
          label={dictionary.earlyAccess.form.email.label}
          path='email'
          placeholder={dictionary.earlyAccess.form.email.placeholder}
          type='email'
        />
        <Button loading={isLoading} type='submit'>
          {dictionary.earlyAccess.form.submit}
        </Button>
      </div>
    </AppForm>
  );
};
