import Link from 'next/link';
import { buttonVariants, cn, Icons } from 'ui';
import { Suspense } from 'react';
import { Header } from '../../../modules/splash/components/Header';
import { Subheader } from '../../../modules/splash/components/Subheader';
import { getDictionary } from '../../i18n';
import Content from '../../../modules/splash/components/Content';
import { ThemeToggle } from '../../../components/layouts/ThemeToggle';
// import { LanguageToggle } from '../../../components/layouts/LanguageToggle';
import { Solution2 } from '../../../modules/splash/components/Solution2';

const Page = ({ searchParams }: { searchParams: { lang: string } }) => {
  const dictionary = getDictionary(searchParams.lang);
  return (
    <section className='flex flex-col justify-center items-center w-screen'>
      <div className='mb-8 flex flex-col items-center gap-4 text-center'>
        <div className='grid w-full grid-rows-1 place-content-center space-x-4 bg-gradient-to-t from-indigo-500/20 from-10% via-sky-500/20 via-50% to-transparent to-100% px-8 py-8 md:h-[90vh] md:grid-cols-2 md:gap-8'>
          <div className='flex flex-col items-center justify-center'>
            <Header dictionary={dictionary} />
            <Subheader dictionary={dictionary} />
            <Suspense fallback={null}>
              <div className='relative mt-4 flex flex-col items-center justify-center gap-4'>
                <Link
                  className={cn(buttonVariants({ size: 'lg' }))}
                  href='/auth/login'
                >
                  {dictionary.landing.cta}
                  <Icons.ChevronRight />
                </Link>
                <div className='flex gap-1'>
                  {/* <LanguageToggle /> */}
                  <ThemeToggle />
                </div>
              </div>
            </Suspense>
          </div>
          <div className='hidden h-full items-center justify-center md:flex'>
            <Solution2 features={dictionary.landing.content.solution2.features}/>
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
