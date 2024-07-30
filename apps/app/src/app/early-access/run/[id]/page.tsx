import { getDictionary } from '../../../i18n';
import createSupabaseServerClient from '../../../../../lib/supabase/server';
import RunProgress from './RunProgress';

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
      average_monthly_cash_flow: number;
      withdraw_fee_range: string;
      withdraw_speed_range: string;
      customer_services: string;
      the_most_concerned: string;
      business_type: string;
      business_coverage: string;
      currency: string;
    };
  };

  const {
    average_monthly_cash_flow: averageMonthlyCashFlow,
    withdraw_fee_range: withdrawFeeRange,
    withdraw_speed_range: withdrawSpeedRange,
    customer_services: customerServices,
    the_most_concerned: theMostConcerned,
  } = data;

  return (
    <div className='mx-auto flex h-full w-full flex-col justify-center gap-6 py-12 sm:w-2/3'>
      <RunProgress
        averageMonthlyCashFlow={averageMonthlyCashFlow}
        customerServices={customerServices}
        dictionary={dictionary}
        id={id}
        theMostConcerned={theMostConcerned}
        withdrawFeeRange={withdrawFeeRange}
        withdrawSpeedRange={withdrawSpeedRange}
      />
    </div>
  );
};

export default Page;
