import { Icons } from 'ui';
import type { Dictionary } from '../../../dictionaries';

export function Subheader({ dictionary }: { dictionary: Dictionary }) {
  return (
    <>
      <p className='text-muted-foreground mt-8 flex max-w-[42rem] flex-col items-center justify-center sm:text-xl lg:px-24'>
        <span className='flex w-full'>
          <Icons.Check className='text-green-500' />
          {dictionary.landing.splash.slogan[0]}
        </span>
        <span className='flex w-full'>
          <Icons.Check className='text-green-500' />
          {dictionary.landing.splash.slogan[1]}
        </span>
        <span className='flex w-full'>
          <Icons.Check className='text-green-500' />
          {dictionary.landing.splash.slogan[2]}
        </span>
      </p>
      <div className='text-muted-foreground mt-4 max-w-[42rem] leading-normal sm:text-xl sm:leading-8'>
        <details open>
          <summary>{dictionary.landing.splash.header}</summary>
          <strong>{dictionary.brand}</strong>{' '}
          {dictionary.landing.splash.subheader}
        </details>
      </div>
    </>
  );
}
