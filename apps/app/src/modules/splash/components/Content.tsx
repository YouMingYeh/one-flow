import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Icons,
} from 'ui';
import Link from 'next/link';
import type { Dictionary } from '../../../dictionaries';

export default function Content({ dictionary }: { dictionary: Dictionary }) {
  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight'>
        {dictionary.landing.content.title}
      </h2>
      <p className='text-muted-foreground'>
        {dictionary.landing.content.description}
      </p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <Card className='flex flex-col justify-between'>
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
        <Card className='flex flex-col justify-between'>
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

        <Card className='flex flex-col justify-between'>
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
    </>
  );
}
