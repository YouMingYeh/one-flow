import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Icons,
  Marquee,
  NumberTicker,
} from 'ui';
import Link from 'next/link';
import type { Dictionary } from '../../../dictionaries';
import EarlyAccessButton from './EarlyAccessButton';
import { Solution2 } from './Solution2';

export default function Content({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h2 className='mt-8 text-4xl font-bold tracking-tight'>
        {dictionary.landing.content.title}
      </h2>
      <p className='text-muted-foreground'>
        {dictionary.landing.content.description}
      </p>
      <div className='mb-16 w-full grid grid-cols-1 gap-6 px-8 sm:grid-cols-3'>
        <Card className='flex flex-col justify-between bg-indigo-50'>
          <CardHeader>
            <CardTitle className='flex flex-col items-center justify-center gap-1'>
              <Icons.Rocket />
              {dictionary.landing.content.cards.findYourBestMatch.title}
            </CardTitle>
            <CardDescription>
              {dictionary.landing.content.cards.findYourBestMatch.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='item-center'>
            <p className='text-sm'>
              {dictionary.landing.content.cards.findYourBestMatch.content}
            </p>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Link href='/'>
              <Button>
                {dictionary.landing.content.cards.findYourBestMatch.cta}{' '}
                <Icons.ChevronRight />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className='flex flex-col justify-between bg-sky-50'>
          <CardHeader>
            <CardTitle className='flex flex-col items-center justify-center gap-1'>
              <Icons.PackageOpen />
              {dictionary.landing.content.cards.itJustWorks.title}
            </CardTitle>
            <CardDescription>
              {dictionary.landing.content.cards.itJustWorks.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='item-center'>
            <p className='text-sm'>
              {dictionary.landing.content.cards.itJustWorks.content}
            </p>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Link href='/'>
              <Button>
                {dictionary.landing.content.cards.itJustWorks.cta}{' '}
                <Icons.ChevronRight />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className='flex flex-col justify-between bg-indigo-50'>
          <CardHeader>
            <CardTitle className='flex flex-col items-center justify-center gap-1'>
              <Icons.PiggyBank />
              {dictionary.landing.content.cards.howMuch.title}
            </CardTitle>
            <CardDescription>
              {dictionary.landing.content.cards.howMuch.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='item-center'>
            <p className='text-sm'>
              {dictionary.landing.content.cards.howMuch.content}
            </p>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Link href='/'>
              <Button>
                {dictionary.landing.content.cards.howMuch.cta}{' '}
                <Icons.ChevronRight />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className='flex overflow-hidden flex-col gap-4 relative'>
        <h2 className='text-4xl font-semibold leading-none tracking-tight'>
          {dictionary.landing.content.numberTicker.title}
        </h2>
        <h3 className='text-muted-foreground text-xl'>
          {dictionary.landing.content.numberTicker.description}
        </h3>
        <p className='mt-4 whitespace-pre-wrap text-8xl font-medium tracking-tighter'>
          <NumberTicker value={15} /> +
        </p>
        <h2 className='mt-2 text-6xl font-semibold leading-none tracking-tight'>
          {dictionary.landing.content.numberTicker.footer}
        </h2>
        <Marquee className='[--duration:20s]' pauseOnHover>
          {[
            'Pingpong',
            'Lianlian',
            'Worldfirst',
            'HSBC Merchants box',
            '智汇鹅	Airwallex',
            'Skyee',
            'Payoneer',
            'Paypal',
          ].map((item
            
          ) => (
            <span className='text-xl text-muted-foreground' key={item}>
              {item}
            </span>
          ))}
        </Marquee>
      </div>
      <div className='bg-gradient-to-t from-indigo-500/20 from-10% via-sky-500/20 via-50% to-transparent to-100% py-8'>
        <p className='mt-32 text-4xl font-semibold'>
          {dictionary.landing.content.howWeHelp}
        </p>
        <div className='mt-8 grid w-full grid-cols-1 place-content-center gap-6'>
          <h2 className='text-3xl font-semibold leading-none tracking-tight'>
            {dictionary.landing.content.solution2.title}
          </h2>
          <h3 className='text-muted-foreground text-xl'>
            {dictionary.landing.content.solution2.description}
          </h3>

          <Solution2 />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='mt-8 text-4xl font-semibold leading-none tracking-tight'>
          {dictionary.landing.earlyAccess.title}
        </h2>
        <h3 className='text-muted-foreground text-xl'>
          {dictionary.landing.earlyAccess.description}
        </h3>
        <EarlyAccessButton />
      </div>
    </div>
  );
}
