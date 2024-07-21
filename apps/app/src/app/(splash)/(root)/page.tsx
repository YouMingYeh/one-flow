import Link from 'next/link';
import { buttonVariants, cn, Icons } from 'ui';
import { Header } from '../../../modules/splash/components/Header';
import { Subheader } from '../../../modules/splash/components/Subheader';
import { getDictionary } from '../../i18n';
import Content from '../../../modules/splash/components/Content';

const Page = ({ searchParams }: { searchParams: { lang: string } }) => {
  const dictionary = getDictionary( searchParams.lang);
  return (
    <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
      <div className='container flex max-w-[76rem] flex-col items-center gap-4 text-center'>
        <Header dictionary={dictionary} />
        <Subheader dictionary={dictionary} />
        <div className='relative mb-36 w-[24rem]'>
          <Link
            className={cn(buttonVariants({ size: 'lg' }))}
            href='/auth/login'
          >
            {dictionary.landing.cta}
            <Icons.ChevronRight />
          </Link>
        </div>
        <Content dictionary={dictionary} />
      </div>
    </section>
  );
};

export default Page;
