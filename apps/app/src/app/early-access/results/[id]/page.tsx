import { Button, Icons } from 'ui';
import Link from 'next/link';
import { getDictionary } from '../../../i18n';
import createSupabaseServerClient from '../../../../../lib/supabase/server';

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { lang: string };
}) => {
  const dictionary = getDictionary(searchParams.lang);
  const { id } = params;
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from('early_access')
    .select('*')
    .eq('id', id)
    .single() as { data: { id: string } | null };

  if (!data) {
    return null;
  }

  return (
    <div className='mx-auto flex h-full w-full flex-col justify-center gap-6 py-12 sm:w-2/3'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          {dictionary.earlyAccess.results.title}
        </h1>
        <p className='text-muted-foreground text-md'>
          {dictionary.earlyAccess.results.description}
        </p>
      </div>
      <p>
        {dictionary.earlyAccess.results.youShouldChoose}{' '}
        <span className='font-semibold'>
          PingPong
          </span>{' '}
        {dictionary.earlyAccess.results.asYourPaymentGateway}
      </p>
      <p>
        {dictionary.earlyAccess.results.youWillPay}{' '}
        <span className='font-semibold'>
          0.5%
        </span>{' '}
        {dictionary.earlyAccess.results.ofWithdrawalFee}{' '}
        {dictionary.earlyAccess.results.andWait}{' '}
        <span className='font-semibold'>
          3
        </span>{' '}
        {dictionary.earlyAccess.results.forWithdrawal}
      </p>
      <p>
        {dictionary.earlyAccess.results.youWillGet}{' '}
        <span className='font-semibold'>
          24/7
        </span>{' '}
        {dictionary.earlyAccess.results.customerService}
      </p>
      <p>
        {dictionary.earlyAccess.results.enjoyYourBusiness}
      </p>
      <Link href={`/early-access/${id}`}>
      <Button size='lg'>
          {dictionary.earlyAccess.results.goOn}
          <Icons.ChevronRight className='ml-2' />
      </Button>
      </Link>
    </div>
  );
};

export default Page;
