import type { UrlObject } from 'node:url';
import {
  BarChartLabel,
  Button,
  Icons,
  Separator,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  // TableHead,
  // TableHeader,
  TableRow,
} from 'ui';
import Link from 'next/link';
import Image from 'next/image';
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
      current_gateway: string; // e.g. "pingpong"
      original_rate: number; // e.g. 1.0
      current_rate: string; // e.g. "2.9%"
    } | null;
  };

  if (!data) {
    return null;
  }

  // Extract user data
  const cashFlow = data.average_monthly_cash_flow;
  const [, maxWithdrawFee] = data.withdraw_fee_range.split(',').map(parseFloat);
  const [, maxWithdrawSpeed] = data.withdraw_speed_range
    .split(',')
    .map(parseFloat);

  // Step 1: Determine the Tier based on cash flow
  let tier = pricingData.find(t => {
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
    return cashFlow * 6 >= tierMin * 10000 && cashFlow * 6 <= tierMax * 10000;
  });

  if (!tier) {
    tier = pricingData[0];
  }

  // Step 2: Filter PSPs based on fee and speed preferences
  let suitablePSPs = Object.entries(tier)
    .filter(([, fee]) => {
      if (typeof fee !== 'number') return false;
      return fee <= maxWithdrawFee;
    })
    .filter(([psp]) => {
      const duration = withdrawDuration[psp as keyof typeof withdrawDuration];
      const durationSpeed = parseFloat(duration?.match(/\d+/)?.[0] || '0');
      return durationSpeed <= maxWithdrawSpeed;
    });

  if (suitablePSPs.length === 0) {
    suitablePSPs = Object.entries(tier);
  }

  // Step 3: Sort suitable PSPs based on fee, from lowest to highest
  const sortedPSPs = suitablePSPs.sort((a, b) => Number(a[1]) - Number(b[1]));

  // Select the top three PSPs if available
  const [bestPSP, secondPSP, thirdPSP] = sortedPSPs;

  const bestPSPName = nameMapping[bestPSP[0] as keyof typeof nameMapping];
  const bestPSPFee = bestPSP[1];
  const bestPSPDuration =
    withdrawDuration[bestPSP[0] as keyof typeof withdrawDuration];

  const secondPSPName = nameMapping[secondPSP[0] as keyof typeof nameMapping];

  const secondPSPFee = secondPSP[1];
  const secondPSPDuration =
    withdrawDuration[secondPSP[0] as keyof typeof withdrawDuration];

  const thirdPSPName = nameMapping[thirdPSP[0] as keyof typeof nameMapping];
  const thirdPSPFee = thirdPSP[1];
  const thirdPSPDuration =
    withdrawDuration[thirdPSP[0] as keyof typeof withdrawDuration];

  const originalPSP = data.current_gateway.split(',')[0] as
    | 'pingpong'
    | 'lianlian'
    | 'worldfirst'
    | 'hsbc_merchants_box'
    | 'zhihui_e'
    | 'airwallex'
    | 'skyee'
    | 'payoneer'
    | 'paypal';
  const currentRageNumber = Number(data.current_rate.replace('%', ''));
  const originalRate = currentRageNumber || tier[originalPSP] || 1.0;

  return (
    <div className='mx-auto flex h-full w-full flex-col justify-center gap-6 py-12 sm:w-2/3'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-20 w-20' />
        <h1 className='text-xl font-semibold tracking-tight'>
          {dictionary.earlyAccess.results.title}
        </h1>
        <p className='text-md text-primary'>
          OneFlow 帮助您每月节省了{' '}
          <span className='text-xl font-bold text-blue-500'>
            {((originalRate - Number(bestPSPFee)) * cashFlow * 0.01).toFixed(2)}
          </span>
          人民币 💰
        </p>
        {/* <p>
          並可以享受免費的 {customerServiceMap[bestPSP[0]].join(', ')} 服務 🎉
        </p> */}
      </div>
      <BarChartLabel
        chartConfig={{
          y: {
            label: '费率 (%)',
            color: 'hsl(var(--chart-1))',
          },
        }}
        chartData={[
          {
            x: '原有的提款工具 (%)',
            y: originalRate,
          },
          {
            x: 'OneFlow 帮你找到 (%)',
            y: bestPSPFee,
          },
        ]}
        className='mx-auto max-w-lg'
        footer={
          <div className='flex items-center gap-2'>
            <Icons.TrendingDown className='text-green-500' />
            {/* expected */}
            <span>
              你可以省下 {(originalRate - Number(bestPSPFee)).toFixed(2)}%
              的费率，每月节省了{' '}
              {((originalRate - Number(bestPSPFee)) * cashFlow * 0.01).toFixed(
                2,
              )}{' '}
              人民币 💰
            </span>
          </div>
        }
        title='OneFlow 帮你找到更好的提款工具'
      />
      <Separator />
      <h3 className='text-xl font-semibold'>
        {dictionary.earlyAccess.results.checkItOut}
      </h3>
      <p className='text-muted-foreground'>
        {dictionary.earlyAccess.results.according}{' '}
      </p>
      <p>
        {dictionary.earlyAccess.results.youShouldChoose}{' '}
        <span className='font-semibold'>{bestPSPName}</span>{' '}
        {dictionary.earlyAccess.results.asYourPaymentGateway}
      </p>
      <Table>
        <TableCaption>👆 最适合您的收款渠道</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell className='bg-muted w-1/3 border'>
              <Image
                alt={bestPSPName}
                height={100}
                src={imagePathMap[bestPSP[0]]}
                width={100}
              />
            </TableCell>
            <TableCell className='bg-muted border'>
              <ul className='list-inside list-disc'>
                <li>费率: {bestPSPFee}%</li>
                <li>提现时间: {bestPSPDuration}</li>
                <li>客服时间: {customerServiceMap[bestPSP[0]].join(', ')}</li>
                <Button className='mt-2'>
                  {dictionary.buttons.learnMore} <Icons.ChevronRight />
                </Button>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Separator />

      <h3 className='text-xl font-semibold'>
        {dictionary.earlyAccess.results.details}
      </h3>
      <Table>
        <TableCaption>👆 最适合您的收款渠道</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell className='bg-muted w-1/3 border'>
              <Image
                alt={bestPSPName}
                height={100}
                src={imagePathMap[bestPSP[0]]}
                width={100}
              />
            </TableCell>
            <TableCell className='bg-muted border'>
              <ul className='list-inside list-disc'>
                <li>费率: {bestPSPFee}%</li>
                <li>提现时间: {bestPSPDuration}</li>
                <li>客服时间: {customerServiceMap[bestPSP[0]].join(', ')}</li>
                <Link className='underline' href={linkMap[bestPSP[0]]}>
                  <Button className='mt-2'>
                    {dictionary.buttons.learnMore} <Icons.ChevronRight />
                  </Button>
                </Link>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>基本服务</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多基本服务信息，如：提现时间、费率等
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>优缺点分析</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多优缺点分析，如：使用难易程度
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>其他用户点评</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多其他用户点评，如：客服服务质量
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>
              可支持的货币与地区
            </TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多可支持的货币与地区，如：支持的货币种类
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>额外服务</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多额外服务，如：提供的额外服务
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableCaption>👆 我们也推荐您</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell className='bg-muted w-1/3 border'>
              <Image
                alt={secondPSPName}
                height={100}
                src={imagePathMap[secondPSP[0]]}
                width={100}
              />
            </TableCell>
            <TableCell className='bg-muted border'>
              <ul className='list-inside list-disc'>
                <li>费率: {secondPSPFee}%</li>
                <li>提现时间: {secondPSPDuration}</li>
                <li>客服时间: {customerServiceMap[secondPSP[0]].join(', ')}</li>
                <Button className='mt-2'>
                  {dictionary.buttons.learnMore} <Icons.ChevronRight />
                </Button>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>基本服务</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多基本服务信息，如：提现时间、费率等
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>优缺点分析</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多优缺点分析，如：使用难易程度
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>其他用户点评</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多其他用户点评，如：客服服务质量
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>
              可支持的货币与地区
            </TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多可支持的货币与地区，如：支持的货币种类
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>额外服务</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多额外服务，如：提供的额外服务
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableCaption>👆 我们也推荐您</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell className='bg-muted w-1/3 border'>
              <Image
                alt={thirdPSPName}
                height={100}
                src={imagePathMap[thirdPSP[0]]}
                width={100}
              />
            </TableCell>
            <TableCell className='bg-muted border'>
              <ul className='list-inside list-disc'>
                <li>费率: {thirdPSPFee}%</li>
                <li>提现时间: {thirdPSPDuration}</li>
                <li>客服时间: {customerServiceMap[thirdPSP[0]].join(', ')}</li>
                <Button className='mt-2'>
                  {dictionary.buttons.learnMore} <Icons.ChevronRight />
                </Button>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>基本服务</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多基本服务信息，如：提现时间、费率等
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>优缺点分析</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多优缺点分析，如：使用难易程度
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>其他用户点评</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多其他用户点评，如：客服服务质量
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>
              可支持的货币与地区
            </TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多可支持的货币与地区，如：支持的货币种类
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='bg-muted border'>额外服务</TableCell>
            <TableCell className='blur-sm'>
              请订阅以了解更多额外服务，如：提供的额外服务
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Link className='ml-auto' href={`/early-access/${id}`}>
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
  pingpong: number;
  lianlian: number;
  worldfirst: number;
  hsbc_merchants_box: number;
  zhihui_e: number;
  airwallex: number;
  skyee: number;
  payoneer: number;
  paypal: number;
};

const pricingData: TierPricing[] = [
  {
    tier: '<0.5w 美元',
    pingpong: 1.0,
    lianlian: 0.7,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.2,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 1.2,
    paypal: 3.0,
  },
  {
    tier: '0.5w ~ 1w 美元',
    pingpong: 0.9,
    lianlian: 0.7,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.2,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 1.2,
    paypal: 3.0,
  },
  {
    tier: '1w ~ 2w 美元',
    pingpong: 0.8,
    lianlian: 0.7,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.2,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 1.2,
    paypal: 3.0,
  },
  {
    tier: '2w ~ 5w 美元',
    pingpong: 0.7,
    lianlian: 0.7,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.2,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 1.1,
    paypal: 3.0,
  },
  {
    tier: '5w ~ 10w 美元',
    pingpong: 0.6,
    lianlian: 0.6,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.2,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 1.0,
    paypal: 3.0,
  },
  {
    tier: '10w ~ 20w 美元',
    pingpong: 0.5,
    lianlian: 0.6,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.2,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 0.9,
    paypal: 3.0,
  },
  {
    tier: '20w ~ 40w 美元',
    pingpong: 0.4,
    lianlian: 0.5,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.2,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 0.8,
    paypal: 3.0,
  },
  {
    tier: '40w ~ 80w 美元',
    pingpong: 0.3,
    lianlian: 0.4,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.175,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 0.7,
    paypal: 3.0,
  },
  {
    tier: '80w ~ 150w 美元',
    pingpong: 0.2,
    lianlian: 0.35,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.1625,
    zhihui_e: 0.3,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 0.6,
    paypal: 3.0,
  },
  {
    tier: '>150w 美元',
    pingpong: 0.1,
    lianlian: 0.3,
    worldfirst: 0.3,
    hsbc_merchants_box: 0.1625,
    zhihui_e: 0.05,
    airwallex: 0.4,
    skyee: 0.6,
    payoneer: 0.5,
    paypal: 3.0,
  },
];

const withdrawDuration = {
  pingpong: 'T+0 (18:00前)',
  lianlian: 'T+0 (17:00前)，之后提供灵活的提现方式',
  worldfirst: 'T+ 1~2天 (外币2~5天)（通过支付宝实时提现）',
  hsbc_merchants_box: 'T+0～1',
  zhihui_e: 'T+0 (18:00前)',
  airwallex: 'T+0 (17:00前)',
  skyee: 'T+0 (18:00前)',
  payoneer: 'T+ 1~2天',
  paypal: null,
};

const nameMapping = {
  pingpong: 'pingpong',
  lianlian: 'lianlian',
  worldfirst: 'worldfirst',
  hsbc_merchants_box: 'HSBC Merchants box',
  zhihui_e: '智汇鹅 airwallex',
  airwallex: 'skyee',
  skyee: 'payoneer',
  payoneer: 'paypal',
  paypal: 'paypal',
};

const customerServiceMap: Record<string, string[]> = {
  pingpong: ['24/7 客服支持'], // 日期相關的服務數據，可根據需要調整
  lianlian: ['24/7 客服支持'], // 日期相關的服務數據，可根據需要調整
  worldfirst: ['24/7 客服支持，月流水达十万人民币有属客服经理'], // 服務條件說明
  hsbc_merchants_box: ['工作日 9:00-18:00'], // 工作日服務時間
  zhihui_e: ['工作日 10:00-18:00'], // 標準工作日支持時間
  airwallex: ['工作日 10:00-18:00，前六个月有专属客服经理'], // 初期提供专属客服经理
  skyee: ['未找到具体数据'], // 未找到具体数据
  payoneer: ['工作日 9:00-18:00'], // 工作日服務時間
  paypal: ['24/7 客服支持'], // 通用服务说明
};

const imagePathMap: Record<string, string> = {
  pingpong: '/brand/pingpong.png',
  lianlian: '/brand/lianlian.png',
  worldfirst: '/brand/worldfirst.png',
  hsbc_merchants_box: '/brand/hsbc_merchants_box.png',
  zhihui_e: '/brand/zhihui_e.png',
  airwallex: '/brand/airwallex.png',
  skyee: '/brand/skyee.png',
  payoneer: '/brand/payoneer.png',
  paypal: '/brand/paypal.png',
};

const linkMap: Record<string, UrlObject> = {
  pingpong: new URL('https://www.pingpongx.com'),
  lianlian: new URL('https://www.lianlianpay.com'),
  worldfirst: new URL('https://www.worldfirst.com'),
  hsbc_merchants_box: new URL('https://www.hsbc.com'),
  zhihui_e: new URL('https://www.airwallex.com'),
  airwallex: new URL('https://www.airwallex.com'),
  skyee: new URL('https://www.skyee.com'),
  payoneer: new URL('https://www.payoneer.com'),
  paypal: new URL('https://www.paypal.com'),
};
