import Link from 'next/link';
import { buttonVariants, cn, Icons } from 'ui';
import { Suspense } from 'react';
import { Header } from '../../../modules/splash/components/Header';
import { Subheader } from '../../../modules/splash/components/Subheader';
import { getDictionary } from '../../i18n';
import Content from '../../../modules/splash/components/Content';
import { ThemeToggle } from '../../../components/layouts/ThemeToggle';
import { LanguageToggle } from '../../../components/layouts/LanguageToggle';
import { Solution1 } from '../../../modules/splash/components/Solution1';

const Page = ({ searchParams }: { searchParams: { lang: string } }) => {
  const dictionary = getDictionary(searchParams.lang);
  return (
    <section className='space-y-6 pb-8 pt-6'>
      <div className='container flex max-w-[76rem] flex-col items-center gap-4 text-center mb-8'>
        <div className='grid grid-rows-2 md:max-w-6xl md:grid-rows-1 md:grid-cols-2 md:gap-8 md:px-8 place-content-center'>
          <div className='order-2 flex flex-col md:order-1'>
            <Header dictionary={dictionary} />
            <Subheader dictionary={dictionary} />
            <Suspense fallback={null}>
              <div className='relative flex flex-col items-center justify-center gap-4'>
                <Link
                  className={cn(buttonVariants({ size: 'lg' }))}
                  href='/auth/login'
                >
                  {dictionary.landing.cta}
                  <Icons.ChevronRight />
                </Link>
                <div className='flex gap-1'>
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>
            </Suspense>
          </div>
          <div className='order-1 md:order-2 flex justify-center items-center h-full'>
            <Solution1 />
          </div>
        </div>

        <Suspense fallback={null}>
          <Content dictionary={dictionary} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
