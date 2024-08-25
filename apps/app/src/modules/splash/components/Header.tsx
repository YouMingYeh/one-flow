import type { Dictionary } from '../../../dictionaries';

export function Header({ dictionary }: { dictionary: Dictionary }) {
  return (
    <h1 className='font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
      <strong className='relative'>
        <span className='absolute -bottom-0.5 -left-1.5 -right-2 -top-0.5 -z-10 -rotate-2 bg-indigo-500/50 bg-opacity-90' />
        <span className='leading-loose'>{dictionary.brand}</span>
      </strong>
      {dictionary.landing.splash.header}
    </h1>
  );
}
