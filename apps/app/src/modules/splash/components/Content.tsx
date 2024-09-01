import {
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
import Image from 'next/image';
import type { Dictionary } from '../../../dictionaries';
import { DrawerDialogButton } from '../../../components/layouts/DrawerDialogButton';
import EarlyAccessButton from './EarlyAccessButton';
import { Solution2 } from './Solution2';
import ChooseCard from './choose-card.svg';
import Analysis from './analysis.svg';
import Predict from './predict.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function Content({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      <h2 className='mt-8 text-4xl font-bold tracking-tight'>
        {dictionary.landing.splash.header}
      </h2>
      <p className='text-muted-foreground max-w-2xl px-8 text-lg'>
        {dictionary.landing.splash.subheader}
      </p>
      <h2 className='mt-16 text-4xl font-bold tracking-tight'>
        {dictionary.landing.content.title}
      </h2>
      <p className='text-muted-foreground'>
        {dictionary.landing.content.description}
      </p>
      <div className='mb-16 grid w-full grid-cols-1 gap-6 px-8 sm:grid-cols-3'>
        <Card className='flex flex-col justify-between bg-gradient-to-tr from-indigo-500/20 from-10% via-sky-500/20 via-50% to-transparent to-100%'>
          <CardHeader>
            <CardTitle className='flex flex-col items-center justify-center gap-1 text-xl'>
              <Icons.Rocket />
              {dictionary.landing.content.cards.findYourBestMatch.title}
            </CardTitle>
            <CardDescription className='text-lg'>
              {dictionary.landing.content.cards.findYourBestMatch.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='flex items-center justify-center'>
            <Image
              alt='choose-card'
              className='w-2/3'
              src={ChooseCard as StaticImport}
            />
          </CardContent>
          <CardFooter className='flex justify-end'>
            <DrawerDialogButton
              buttonText={
                dictionary.landing.content.cards.findYourBestMatch.cta
              }
              description={
                dictionary.landing.content.cards.findYourBestMatch.description
              }
              title={dictionary.landing.content.cards.findYourBestMatch.title}
            >
              <p className='text-sm'>
                {dictionary.landing.content.cards.findYourBestMatch.content}
              </p>
              <Image
                alt='choose-card'
                className='w-2/3'
                src={ChooseCard as StaticImport}
              />
            </DrawerDialogButton>
          </CardFooter>
        </Card>
        <Card className='flex flex-col justify-between bg-gradient-to-tr from-indigo-500/20 from-10% via-sky-500/20 via-50% to-transparent to-100%'>
          <CardHeader>
            <CardTitle className='flex flex-col items-center justify-center gap-1 text-xl'>
              <Icons.PackageOpen />
              {dictionary.landing.content.cards.itJustWorks.title}
            </CardTitle>
            <CardDescription className='text-lg'>
              {dictionary.landing.content.cards.itJustWorks.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='flex items-center justify-center'>
            <Image
              alt='analysis'
              className='w-2/3'
              src={Analysis as StaticImport}
            />
          </CardContent>

          <CardFooter className='flex justify-end'>
            <DrawerDialogButton
              buttonText={dictionary.landing.content.cards.itJustWorks.cta}
              description={
                dictionary.landing.content.cards.itJustWorks.description
              }
              title={dictionary.landing.content.cards.itJustWorks.title}
            >
              <p className='text-sm'>
                {dictionary.landing.content.cards.itJustWorks.content}
              </p>
              <Image
                alt='analysis'
                className='w-2/3'
                src={Analysis as StaticImport}
              />
            </DrawerDialogButton>
          </CardFooter>
        </Card>

        <Card className='flex flex-col justify-between bg-gradient-to-tr from-indigo-500/20 from-10% via-sky-500/20 via-50% to-transparent to-100%'>
          <CardHeader>
            <CardTitle className='flex flex-col items-center justify-center gap-1 text-xl'>
              <Icons.PiggyBank />
              {dictionary.landing.content.cards.howMuch.title}
            </CardTitle>
            <CardDescription className='text-lg'>
              {dictionary.landing.content.cards.howMuch.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='flex justify-center'>
            <Image
              alt='predict'
              className='w-2/3'
              src={Predict as StaticImport}
            />
          </CardContent>
          <CardFooter className='flex justify-end'>
            <DrawerDialogButton
              buttonText={dictionary.landing.content.cards.howMuch.cta}
              description={dictionary.landing.content.cards.howMuch.description}
              title={dictionary.landing.content.cards.howMuch.title}
            >
              <p className='text-sm'>
                {dictionary.landing.content.cards.howMuch.content}
              </p>
              <Image
                alt='predict'
                className='w-2/3'
                src={Predict as StaticImport}
              />
            </DrawerDialogButton>
          </CardFooter>
        </Card>
      </div>
      <div className='relative flex flex-col gap-4 overflow-hidden px-8'>
        <h2 className='text-4xl font-semibold leading-none tracking-tight'>
          {dictionary.landing.content.numberTicker.title}
        </h2>
        <h3 className='text-muted-foreground text-xl'>
          {dictionary.landing.content.numberTicker.description}
        </h3>
        <p className='mt-4 whitespace-pre-wrap text-8xl font-medium tracking-tighter'>
          <NumberTicker value={15} /> +
        </p>
        <h2 className='mt-2 text-2xl font-semibold leading-none tracking-tight'>
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
          ].map(item => (
            <span className='text-muted-foreground text-xl' key={item}>
              {item}
            </span>
          ))}
        </Marquee>
      </div>
      <div className='w-full bg-gradient-to-tr from-indigo-500/20 from-10% via-sky-500/20 via-50% to-transparent to-100% px-8 py-8'>
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

          <Solution2 features={dictionary.landing.content.solution2.features} />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 px-8'>
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
