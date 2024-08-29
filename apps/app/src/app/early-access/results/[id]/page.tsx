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

  // Step 3: Sort suitable PSPs based on fee, from lowest to highest
  const sortedPSPs = suitablePSPs.sort((a, b) => Number(a[1]) - Number(b[1]));

  // Select the top three PSPs if available
  const [bestPSP, secondPSP, thirdPSP] = sortedPSPs;

  const bestPSPName = nameMapping[bestPSP?.[0] as keyof typeof nameMapping];
  const bestPSPFee = bestPSP?.[1];
  const bestPSPDuration =
    withdrawDuration[bestPSP?.[0] as keyof typeof withdrawDuration];

  const secondPSPName = secondPSP
    ? nameMapping[secondPSP[0] as keyof typeof nameMapping]
    : null;
  const secondPSPFee = secondPSP?.[1];
  const secondPSPDuration =
    withdrawDuration[secondPSP?.[0] as keyof typeof withdrawDuration];

  const thirdPSPName = thirdPSP
    ? nameMapping[thirdPSP[0] as keyof typeof nameMapping]
    : null;
  const thirdPSPFee = thirdPSP?.[1];
  const thirdPSPDuration =
    withdrawDuration[thirdPSP?.[0] as keyof typeof withdrawDuration];

  return (
    <div className='mx-auto flex h-full w-full flex-col justify-center gap-6 py-12 sm:w-2/3'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-20 w-20' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          {dictionary.earlyAccess.results.title}
        </h1>
        <p className='text-muted-foreground text-md'>
          {dictionary.earlyAccess.results.description}
        </p>
      </div>
      <p>
        1️⃣ {dictionary.earlyAccess.results.youShouldChoose}{' '}
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
        {dictionary.earlyAccess.results.servicesProvided}:{' '}
        {serviceMap[bestPSP[0]].join(', ')}
      </p>
      {secondPSP ? (
        <>
          <p>
            2️⃣ {dictionary.earlyAccess.results.secondChoice}{' '}
            <span className='font-semibold'>{secondPSPName}</span>{' '}
            {dictionary.earlyAccess.results.youWillPay}{' '}
            <span className='font-semibold'>{secondPSPFee}%</span>{' '}
            {dictionary.earlyAccess.results.andWait}{' '}
            <span className='font-semibold'>{secondPSPDuration}</span>{' '}
            {dictionary.earlyAccess.results.forWithdrawal}
          </p>
          <p>
            {dictionary.earlyAccess.results.servicesProvided}:{' '}
            {serviceMap[secondPSP[0]].join(', ')}
          </p>
        </>
      ) : null}
      {thirdPSP ? (
        <>
          <p>
            3️⃣ {dictionary.earlyAccess.results.thirdChoice}{' '}
            <span className='font-semibold'>{thirdPSPName}</span>{' '}
            {dictionary.earlyAccess.results.youWillPay}{' '}
            <span className='font-semibold'>{thirdPSPFee}%</span>{' '}
            {dictionary.earlyAccess.results.andWait}{' '}
            <span className='font-semibold'>{thirdPSPDuration}</span>{' '}
            {dictionary.earlyAccess.results.forWithdrawal}
          </p>
          <p>
            {dictionary.earlyAccess.results.servicesProvided}:{' '}
            {serviceMap[thirdPSP[0]].join(', ')}
          </p>
        </>
      ) : null}
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
    tier: '<0.5w 美元',
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
    tier: '0.5w - 1w 美元',
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
    tier: '1w ~ 2w 美元',
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
    tier: '2w ~ 5w 美元',
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
    tier: '5w ~ 10w 美元',
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
    tier: '10w ~ 20w 美元',
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
    tier: '20w ~ 40w 美元',
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
    tier: '40w ~ 80w 美元',
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
    tier: '80w ~ 150w 美元',
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
    tier: '>150w 美元',
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
  Pingpong: 'T+0 (18:00前)',
  Lianlian: 'T+0 (17:00前)，之后提供灵活的提现方式',
  Worldfirst: 'T+ 1~2天 (外币2~5天)（通过支付宝实时提现）',
  HSBC_Merchants_box: 'T+0～1',
  Zhihui_E: 'T+0 (18:00前)',
  Airwallex: 'T+0 (17:00前)',
  Skyee: 'T+0 (18:00前)',
  Payoneer: 'T+ 1~2天',
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

const serviceMap: Record<string, string[]> = {
  Pingpong: ['2024-07-24 00:00:00'], // 日期相關的服務數據，可根據需要調整
  Lianlian: ['2024-07-24 00:00:00'], // 日期相關的服務數據，可根據需要調整
  Worldfirst: ['2024年07月24日 无专属客服经理，除非月流水达100k人民币'], // 服務條件說明
  HSBC_Merchants_box: ['工作日 9:00-18:00', 'Phone Call 尚未成功过'], // 工作日服務時間
  Zhihui_E: ['工作日 10:00-18:00'], // 標準工作日支持時間
  Airwallex: ['工作日 10:00-18:00，只有前六个月有专属客服经理'], // 初期提供专属客服经理
  Skyee: ['服务信息不可用'], // 未找到具体数据
  Payoneer: ['工作日 9:00-18:00', 'Phone Call 尚未成功过'], // 工作日服務時間
  Paypal: ['24/7 客服支持', '国际支付', '较高的费用'], // 通用服务说明
};
