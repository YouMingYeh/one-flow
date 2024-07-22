import { Icons } from 'ui';
import { getDictionary } from '../i18n';
import { EarlyAccessForm } from './EarlyAccessForm';

const Page = (
  { searchParams }: { searchParams: { lang: string } }
) => {
  const dictionary = getDictionary(searchParams.lang);
  return (
    <div className='mx-auto flex h-full w-full flex-col justify-center gap-6 sm:w-1/2 py-12'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <p className='text-muted-foreground text-sm'>{dictionary.earlyAccess.note}</p>
        <h1 className='text-2xl font-semibold tracking-tight'>
          {dictionary.earlyAccess.title}
        </h1>
        <p className='text-muted-foreground text-md'>
          {dictionary.earlyAccess.description}
        </p>
      </div>
      <EarlyAccessForm />
    </div>
  );
};

export default Page;