import Link from 'next/link';
import { Icons } from 'ui';
import { ForgotPasswordForm } from '../../../../modules/auth/components/ForgotPasswordForm';
import { getDictionary } from '../../../i18n';

const Page = ({
  searchParams,
}: {
  searchParams: {
    lang: string;
  };
}) => {
  const dictionary = getDictionary(searchParams.lang);
  return (
    <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-20 w-20' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          {dictionary.auth.forgotPassword.header}
        </h1>
        <p className='text-muted-foreground text-sm'>
          {dictionary.auth.forgotPassword.subheader}
        </p>
      </div>
      <ForgotPasswordForm />
      <p className='text-muted-foreground px-8 text-center text-sm'>
        {dictionary.auth.forgotPassword.rememberPassword}{' '}
        <Link
          className='hover:text-brand underline underline-offset-4'
          href='/auth/login'
        >
          {dictionary.auth.forgotPassword.signInHere}
        </Link>
      </p>
    </div>
  );
};

export default Page;
