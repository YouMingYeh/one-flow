import type { NextPage } from 'next';
import Link from 'next/link';
import { Icons, buttonVariants, cn } from 'ui';
import { SplashHeader } from '../../../modules/splash/components/SplashHeader';
import { SplashContent } from '../../../modules/splash/components/SplashContent';
import Content from '../../../modules/splash/components/Content';

const Page: NextPage = () => {
  return (
    <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <SplashHeader />
        <SplashContent />
        <div className='relative mb-36 w-[24rem]'>
          <Link
            className={cn(buttonVariants({ size: 'lg' }))}
            href='/auth/login'
          >
            Get Started <Icons.ChevronRight />
          </Link>
        </div>
        <Content />
      </div>
    </section>
  );
};

export default Page;
