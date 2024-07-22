import type { Dictionary } from '../../../dictionaries';

export function Subheader({ dictionary }: { dictionary: Dictionary }) {
  return (
    <>
      <p className='text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8'>
        {dictionary.landing.splash.slogan}
      </p>
      <p className='text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8'>
        <strong>{dictionary.brand}</strong>{' '}
        {dictionary.landing.splash.subheader}
      </p>
    </>
  );
}
