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
  const { data } = (await supabase
    .from('early_access')
    .select('*')
    .eq('id', id)
    .single()) as {
    data: {
      id: string;
      average_monthly_cash_flow: number; // e.g. 10000
      withdraw_fee_range: string; // e.g. "0.5,1.5"
      withdraw_speed_range: string; // e.g. "1,2"
    } | null;
  };

  if (!data) {
    return null;
  }

  // Extract user data
  const cashFlow = data.average_monthly_cash_flow;
  const [minWithdrawFee, maxWithdrawFee] = data.withdraw_fee_range
    .split(',')
    .map(parseFloat);
  const [minWithdrawSpeed, maxWithdrawSpeed] = data.withdraw_speed_range
    .split(',')
    .map(parseFloat);

  // Step 1: Determine the Tier based on cash flow
  const tier = pricingData.find(t => {
    const tierMin = parseFloat(
      t.tier
        .split('~')[0]
        .replace('<', '')
        .replace('w USD', '')
        .replace(',', '.')
        .trim(),
    );
    const tierMax = t.tier.includes('~')
      ? parseFloat(
          t.tier.split('~')[1].replace('w USD', '').replace(',', '.').trim(),
        )
      : Number.POSITIVE_INFINITY;
    return cashFlow >= tierMin * 10000 && cashFlow <= tierMax * 10000;
  });

  if (!tier) {
    return null;
  }

  // Step 2: Filter PSPs based on fee and speed preferences
  let suitablePSPs = Object.entries(tier)
    .filter(([, fee]) => {
      if (typeof fee !== 'number') return false;
      return fee >= minWithdrawFee && fee <= maxWithdrawFee;
    })
    .filter(([psp]) => {
      const duration = withdrawDuration[psp as keyof typeof withdrawDuration];
      const durationSpeed = parseFloat(duration?.match(/\d+/)?.[0] || '0');
      return (
        durationSpeed >= minWithdrawSpeed && durationSpeed <= maxWithdrawSpeed
      );
    });

  if (suitablePSPs.length === 0) {
    suitablePSPs = Object.entries(tier);
  }

  // Step 3: Select the best PSP, for simplicity we'll take the one with the lowest fee
  const [bestPSP, bestFee] = suitablePSPs.reduce((prev, current) =>
    prev[1] < current[1] ? prev : current,
  );

  const bestPSPName = nameMapping[bestPSP as keyof typeof nameMapping];
  const bestPSPFee = bestFee;
  const bestPSPDuration =
    withdrawDuration[bestPSP as keyof typeof withdrawDuration];

  return (
    <div className='mx-auto flex h-full w-full flex-col justify-center gap-6 py-12 sm:w-2/3'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-12 w-12' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          {dictionary.earlyAccess.results.title}
        </h1>
        <p className='text-muted-foreground text-md'>
          {dictionary.earlyAccess.results.description}
        </p>
      </div>
      <p>
        {dictionary.earlyAccess.results.youShouldChoose}{' '}
        <span className='font-semibold'>{bestPSPName}</span>{' '}
        {dictionary.earlyAccess.results.asYourPaymentGateway}
      </p>
      <p>
        {dictionary.earlyAccess.results.youWillPay}{' '}
        <span className='font-semibold'>{bestPSPFee}%</span>{' '}
        {dictionary.earlyAccess.results.ofWithdrawalFee}{' '}
        {dictionary.earlyAccess.results.andWait}{' '}
        <span className='font-semibold'>{bestPSPDuration}</span>{' '}
        {dictionary.earlyAccess.results.forWithdrawal}
      </p>
      <p>
        {dictionary.earlyAccess.results.youWillGet}{' '}
        <span className='font-semibold'>
          {bestPSP === 'Lianlian' || bestPSP === 'Pingpong' ? '24/7' : '9-5'}
        </span>{' '}
        {dictionary.earlyAccess.results.customerService}
      </p>
      <p>{dictionary.earlyAccess.results.enjoyYourBusiness}</p>
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

type TierPricing = {
  tier: string;
  Pingpong: number;
  Lianlian: number;
  Worldfirst: number;
  HSBC_Merchants_box: number;
  Zhihui_E: number;
  Airwallex: number;
  Skyee: number;
  Payoneer: number;
  Paypal: number;
};

const pricingData: TierPricing[] = [
  {
    tier: '<0.5w USD',
    Pingpong: 1.0,
    Lianlian: 0.7,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.2,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 1.2,
    Paypal: 3.0,
  },
  {
    tier: '0.5w - 1w',
    Pingpong: 0.9,
    Lianlian: 0.7,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.2,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 1.2,
    Paypal: 3.0,
  },
  {
    tier: '1w ~ 2w',
    Pingpong: 0.8,
    Lianlian: 0.7,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.2,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 1.2,
    Paypal: 3.0,
  },
  {
    tier: '2w ~ 5w',
    Pingpong: 0.7,
    Lianlian: 0.7,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.2,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 1.1,
    Paypal: 3.0,
  },
  {
    tier: '5w ~ 10w',
    Pingpong: 0.6,
    Lianlian: 0.6,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.2,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 1.0,
    Paypal: 3.0,
  },
  {
    tier: '10w ~ 20w',
    Pingpong: 0.5,
    Lianlian: 0.6,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.2,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 0.9,
    Paypal: 3.0,
  },
  {
    tier: '20w ~ 40w',
    Pingpong: 0.4,
    Lianlian: 0.5,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.2,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 0.8,
    Paypal: 3.0,
  },
  {
    tier: '40w ~ 80w',
    Pingpong: 0.3,
    Lianlian: 0.4,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.175,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 0.7,
    Paypal: 3.0,
  },
  {
    tier: '80w ~ 150w',
    Pingpong: 0.2,
    Lianlian: 0.35,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.1625,
    Zhihui_E: 0.3,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 0.6,
    Paypal: 3.0,
  },
  {
    tier: '>150w',
    Pingpong: 0.1,
    Lianlian: 0.3,
    Worldfirst: 0.3,
    HSBC_Merchants_box: 0.1625,
    Zhihui_E: 0.05,
    Airwallex: 0.4,
    Skyee: 0.6,
    Payoneer: 0.5,
    Paypal: 3.0,
  },
];


const withdrawDuration = {
  Pingpong: 'T+0 (Before 6pm)',
  Lianlian: 'T+0 (Before 5pm), flexible methods after that',
  Worldfirst:
    'T+ 1~2days (2~5days for foreign currency) (real time if withdraw through Alipay)',
  HSBC_Merchants_box: 'T+0～1',
  Zhihui_E: 'T+0 (Before 6pm)',
  Airwallex: 'T+0 (Before 5pm)',
  Skyee: 'T+0 (Before 6pm)',
  Payoneer: 'T+ 1~2days',
  Paypal: null,
};

const nameMapping = {
  Pingpong: 'Pingpong',
  Lianlian: 'Lianlian',
  Worldfirst: 'Worldfirst',
  HSBC_Merchants_box: 'HSBC Merchants box',
  Zhihui_E: '智汇鹅 Airwallex',
  Airwallex: 'Skyee',
  Skyee: 'Payoneer',
  Payoneer: 'Paypal',
  Paypal: 'Paypal',
};
