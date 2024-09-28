import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
  Icons,
} from 'ui';
import { Suspense } from 'react';
import Link from 'next/link';
import { getDictionary } from '../../i18n';
import createSupabaseServerClient from '../../../../lib/supabase/server';
import CopyURLButton from './CopyURLButton';
import { QuestionnaireForm } from './QuestionnaireForm';

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
  const { data } = (await supabase
    .from('early_access')
    .select('*')
    .eq('id', id)
    .single()) as {
    data: {
      id: string;
      name: string;
      email: string;
      phone: string;
      country: string;
      company: string;
      status: string;
      average_monthly_cash_flow: string;
      withdraw_fee_range: string;
      withdraw_speed_range: string;
      customer_services: string;
      the_most_concerned: string;
      business_type: string;
      business_coverage: string;
      currency: string;
    };
  };

  const { name, email, phone, country, company } = data;

  return (
    <div className='mx-auto flex h-full w-full flex-col justify-center gap-6 py-12 sm:w-1/2'>
      <Link
        className={cn(
          buttonVariants({
            variant: 'ghost',
          }),
          'flex items-start justify-start',
        )}
        href={`/early-access/results/${params.id}`}
      >
        <Icons.ChevronLeft />
        上一页
      </Link>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-20 w-20' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          {dictionary.earlyAccess.ok.title}
        </h1>
        <p className='text-muted-foreground text-md'>
          {dictionary.earlyAccess.ok.description}
        </p>
      </div>
      <Suspense fallback={<Icons.Spinner className='mx-auto animate-spin' />}>
        <QuestionnaireForm dictionary={dictionary} email={email} username={name} />
      </Suspense>
      <Suspense fallback={<Icons.Spinner className='mx-auto animate-spin' />}>
        <Card>
          <CardHeader>
            <CardTitle>{dictionary.earlyAccess.ok.information.title}</CardTitle>
            <CardDescription>
              {dictionary.earlyAccess.ok.information.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              <div>
                <span className='text-muted-foreground'>
                  {dictionary.earlyAccess.ok.information.name}:{' '}
                </span>
                <span>{name}</span>
              </div>
              <div>
                <span className='text-muted-foreground'>
                  {dictionary.earlyAccess.ok.information.email}:{' '}
                </span>
                <span>{email}</span>
              </div>
              <div>
                <span className='text-muted-foreground'>
                  {dictionary.earlyAccess.ok.information.phone}:{' '}
                </span>
                <span>{`${country} ${phone}`}</span>
              </div>
              <div>
                <span className='text-muted-foreground'>
                  {dictionary.earlyAccess.ok.information.company}:{' '}
                </span>
                <span>{company}</span>
              </div>
              {/* <div>
                <span className='text-muted-foreground'>
                  {dictionary.earlyAccess.ok.information.status}:{' '}
                </span>
                <span>{status}</span>
              </div>
              <div>
                <Textarea
                  className='h-32'
                  readOnly
                  value={JSON.stringify(rest, null, 2)}
                />
              </div> */}
            </div>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <CopyURLButton>
              <Icons.Save /> {dictionary.earlyAccess.ok.cta}
            </CopyURLButton>
          </CardFooter>
        </Card>
      </Suspense>
    </div>
  );
};

export default Page;
