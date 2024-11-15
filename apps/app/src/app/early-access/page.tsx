import { Icons } from 'ui';
import { Suspense } from 'react';
import { getDictionary } from '../i18n';
import { EarlyAccessForm } from './EarlyAccessForm';

const Page = ({ searchParams }: { searchParams: { lang: string } }) => {
  const dictionary = getDictionary(searchParams.lang);
  return (
    <div className='mx-auto flex h-full w-full flex-col justify-center gap-6 py-12 sm:w-1/2'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-20 w-20' />

        <h1 className='text-xl font-semibold tracking-tight'>
          {dictionary.earlyAccess.title}
        </h1>
        <p className='text-muted-foreground text-md text-left'>
          {dictionary.earlyAccess.note}
          {dictionary.earlyAccess.description}
        </p>
        <Suspense>
          <div className='text-muted-foreground text-md text-left'>
            {dictionary.earlyAccess.benefits.title}: <br />
            <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
              {dictionary.earlyAccess.benefits.list.map(benefit => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className='text-muted-foreground text-md text-left'>
            {dictionary.earlyAccess.responsibilities.title}: <br />
            <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
              {dictionary.earlyAccess.responsibilities.list.map(
                responsibility => (
                  <li key={responsibility}>{responsibility}</li>
                ),
              )}
            </ul>
          </div>
        </Suspense>
        <p className='text-muted-foreground text-md text-left'>
          {dictionary.earlyAccess.interested}
        </p>
      </div>
      <Suspense fallback={<Icons.Spinner className='mx-auto animate-spin' />}>
        <EarlyAccessForm />
      </Suspense>
    </div>
  );
};

export default Page;
