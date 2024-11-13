import WordRotate from 'ui/src/components/ui/word-rotate';
import QueryInput from './query-input';

export default function Landing() {
  return (
    <main className='bg-muted relative flex h-screen w-full max-w-xl flex-1 md:max-w-none md:overflow-hidden'>
      {/* <Suspense>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 skew-y-12",
          )}
        />
      </Suspense> */}
      <div className='m-auto flex w-full max-w-3xl flex-col overflow-x-hidden px-4 py-8'>
        {/* <Link href="/auth/login" className="absolute right-4 top-4">
          <Button size="sm" className="rounded-2xl">
            登入
          </Button>
        </Link>
        <Link href="/home" className="absolute right-20 top-4">
          <Button size="sm" variant="outline" className="rounded-2xl">
            主頁
          </Button>
        </Link>
        <Link
          href="#query-input"
          className="mx-auto mt-[576px] rounded-full border bg-background p-4 shadow md:hidden"
        >
          <ArrowDown className="h-8 w-8 animate-pulse" />
        </Link> */}
        <WordRotate
          className='mb-12 mt-[784px] text-center text-4xl font-bold md:mt-0'
          words={[
            '跨境电商平台比较与选择指南',
            '如何选择适合的国际支付服务',
            '跨境物流方案解析与最佳实践',
            '各国关税与进出口法规概览',
            '多语言客服策略与工具推荐',
            '跨境电商的税务合规与筹划',
            '国际市场消费者行为与偏好分析',
            '跨境电商的品牌建立与营销策略',
            '如何管理多国货币与汇率风险',
            '跨境电商的法律风险与合规建议',
            '国际退货与换货政策的制定与管理',
            '跨境电商的SEO与数字营销技巧',
            '如何利用社交媒体拓展国际市场',
            '跨境电商的供应链管理与优化',
            '国际市场竞争分析与定位策略',
            '如何处理跨境交易中的欺诈与风险',
            '跨境电商的数据分析与业绩追踪',
            '如何参加国际电商促销活动',
            '跨境电商的环保与可持续发展策略',
            '成功跨境电商卖家的经验分享与案例分析',
          ]}
        />

        <div className='' id='query-input'>
          <QueryInput />
        </div>
      </div>
    </main>
  );
}
