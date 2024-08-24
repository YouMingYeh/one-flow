import type { Dictionary } from '../../../dictionaries';

export function Header({ dictionary }: { dictionary: Dictionary }) {
  return (
    <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
      <strong className='decoration-primary underline'>
        {dictionary.brand}
      </strong>
      , {dictionary.landing.splash.header}
    </h1>
  );
}
