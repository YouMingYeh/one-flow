import Link from 'next/link';
import { ThemeToggle } from '../../../components/layouts/ThemeToggle';
import type { Dictionary } from '../../../dictionaries';
import { LanguageToggle } from '../../../components/layouts/LanguageToggle';

export default function Footer({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className='container'>
      <div className='mx-auto flex max-w-6xl items-center justify-between py-4 md:py-6'>
        <p className='text-center text-sm leading-loose sm:text-left'>
          {dictionary.footer.builtBy}
        </p>
        <div className='flex gap-1'>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      <p>
        <Link
          className='text-muted-foreground text-sm underline-offset-4 hover:underline'
          href='/privacy'
        >
          {dictionary.footer.privacyPolicy}
        </Link>
        <span className='mx-2'>|</span>
        <Link
          className='text-muted-foreground text-sm underline-offset-4 hover:underline'
          href='/terms'
        >
          {dictionary.footer.termsOfService}
        </Link>
        <span className='mx-2'>|</span>
        <Link
          className='text-muted-foreground text-sm underline-offset-4 hover:underline'
          href='mailto:b10705052@ntu.edu.tw'
        >
          {dictionary.footer.contactUs}
        </Link>
      </p>
      <p className='text-muted-foreground text-sm'>
        {dictionary.footer.allRightsReserved}
      </p>
    </footer>
  );
}
