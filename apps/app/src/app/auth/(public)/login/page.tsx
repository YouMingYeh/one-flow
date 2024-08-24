import Link from 'next/link';
import { Icons } from 'ui';
import { LoginAuthForm } from '../../../../modules/auth/components/LoginAuthForm';
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
        <Icons.logo className='mx-auto h-12 w-12' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          {dictionary.auth.login.header}
        </h1>
        <p className='text-muted-foreground text-sm'>
          {dictionary.auth.login.subheader}
        </p>
      </div>
      <LoginAuthForm />
      <p className='text-muted-foreground px-8 text-center text-sm'>
        <Link
          className='hover:text-brand underline underline-offset-4'
          href='/auth/register'
        >
          {dictionary.auth.login.createAccount}
        </Link>
      </p>
    </div>
  );
};

export default Page;
