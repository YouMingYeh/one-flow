import {
  Icons,
  Input,
  Label,
  Separator,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'ui';
import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import createSupabaseServerClient from '../../../../../lib/supabase/server';
import SubmitButton from '../../../../modules/workspace/components/submitButton';

const RecentPage = () => {
  const submit = async (formData: FormData) => {
    'use server';
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getSession();

    const user = data.session?.user;
    if (!user) {
      redirect('/auth/login');
    }

    const workspace = {
      id: uuidv4(),
      user_id: user.id,
      name,
      description,
    } as Workspace;

    await supabase.from('workspace').insert([workspace]).select();

    redirect(`/app/workspace/${workspace.id}`);
  };
  return (
    <div className='space-y-6 px-10'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>
          Create a new workspace
        </h2>
        <p className='text-muted-foreground'>
          You can create a new workspace here.
        </p>
      </div>
      <Separator className='my-6' />
      <div className='flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0'>
        <form
          action={submit}
          className='flex w-full flex-col gap-4 p-1 lg:max-w-xl'
          id='onborda-step4'
        >
          <div>
            <Label
              className='mb-1 flex items-center gap-1 align-middle'
              htmlFor='name'
            >
              Name{' '}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icons.HelpCircle
                    className='hover:cursor-pointer'
                    size={16}
                  />
                </TooltipTrigger>
                <TooltipContent className='flex max-w-md flex-wrap'>
                  The name of the workspace. This will be displayed on the
                  workspace card.
                </TooltipContent>
              </Tooltip>
            </Label>
            <Input
              id='name'
              name='name'
              placeholder='E-Commerce Store'
              required
            />
          </div>
          <div>
            <Label
              className='mb-1 flex items-center gap-1 align-middle'
              htmlFor='description'
            >
              Description{' '}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icons.HelpCircle
                    className='hover:cursor-pointer'
                    size={16}
                  />
                </TooltipTrigger>
                <TooltipContent className='flex max-w-md flex-wrap'>
                  A brief description of the workspace. This will be displayed
                  on the workspace card.
                </TooltipContent>
              </Tooltip>
            </Label>
            <Textarea
              id='description'
              name='description'
              placeholder='My awesome e-commerce store'
            />
          </div>

          <SubmitButton>
            Create Workspace <Icons.ChevronRight />
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default RecentPage;
