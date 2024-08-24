import { Icons } from 'ui';
import type { Dictionary } from '../../../dictionaries';

export function Subheader({ dictionary }: { dictionary: Dictionary }) {
  return (
    <>
      <p className='text-muted-foreground max-w-[42rem] sm:text-xl flex justify-center flex-col items-center lg:px-32 mt-8'>
        <span className='w-full flex'>
          <Icons.Check className='text-green-500' />
          {dictionary.landing.splash.slogan[0]}
        </span>
        <span className='w-full flex'>
          <Icons.Check className='text-green-500' />
          {dictionary.landing.splash.slogan[1]}
        </span>
        <span className='w-full flex'>
          <Icons.Check className='text-green-500' />
          {dictionary.landing.splash.slogan[2]}
        </span>
      </p>
      <div className='text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8 mt-4'>
        <details open>
          <summary>{dictionary.landing.splash.header}</summary>
          <strong>{dictionary.brand}</strong>{' '}
          {dictionary.landing.splash.subheader}
        </details>
      </div>
    </>
  );
}
