import Link from 'next/link';
import { Button, Card, CardContent, Icons } from 'ui';

export default function Compare() {
  return (
    <div className='overflow-auto'>
      <div className='container mx-auto max-w-7xl px-4 py-16'>
        <h2 className='text-2xl font-bold tracking-tight'>
          我们的 ChatGPT 更...
        </h2>
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='grid gap-4'>
                <Card>
                  <CardContent className='flex items-start gap-4 p-3'>
                    <Icons.Target className='text-primary mt-1 h-6 w-6' />
                    <div className='space-y-1'>
                      <h3 className='font-medium'>准确</h3>
                      <p className='text-muted-foreground text-sm'>
                        以大量高质的数据集训练
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='flex items-start gap-4 p-3'>
                    <Icons.Brain className='text-primary mt-1 h-6 w-6' />
                    <div className='space-y-1'>
                      <h3 className='font-medium'>专业</h3>
                      <p className='text-muted-foreground text-sm'>
                        仅专注于特定领域的问答
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='flex items-start gap-4 p-3'>
                    <Icons.Fingerprint className='text-primary mt-1 h-6 w-6' />
                    <div className='space-y-1'>
                      <h3 className='font-medium'>安全</h3>
                      <p className='text-muted-foreground text-sm'>
                        绝不泄露用户的信息
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='flex items-start gap-4 p-3'>
                    <Icons.Bot className='text-primary mt-1 h-6 w-6' />
                    <div className='space-y-1'>
                      <h3 className='font-medium'>定制化</h3>
                      <p className='text-muted-foreground text-sm'>
                        更贴合您的需求场景
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='grid gap-4'>
                <Card>
                  <CardContent className='flex items-start gap-4 p-3'>
                    <Icons.Sparkles className='text-primary mt-1 h-6 w-6' />
                    <div className='space-y-1'>
                      <h3 className='font-medium'>跨境收款界的高频打手</h3>
                      <p className='text-muted-foreground text-sm'>
                        为您解决收款难题
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='flex items-start gap-4 p-3'>
                    <Icons.Zap className='text-primary mt-1 h-6 w-6' />
                    <div className='space-y-1'>
                      <h3 className='font-medium'>一站式跨境收款整合方案</h3>
                      <p className='text-muted-foreground text-sm'>
                        简化您的收款流程
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='flex items-start gap-4 p-3'>
                    <Icons.Clock className='text-primary mt-1 h-6 w-6' />
                    <div className='space-y-1'>
                      <h3 className='font-medium'>
                        实时对接最适合您的收款渠道
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        智能匹配最优方案
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='flex items-start gap-4 p-3'>
                    <Icons.Cpu className='text-primary mt-1 h-6 w-6' />
                    <div className='space-y-1'>
                      <h3 className='font-medium'>有线，有时，有力</h3>
                      <p className='text-muted-foreground text-sm'>
                        保证服务质量
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Link href='/auth/login'>
          <Button className='mt-8' size='lg'>
            或试用我们的 OneFlow 收款
            <Icons.ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
