import Link from 'next/link';
import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cn,
  Icons,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'ui';
import Image from 'next/image';
import { PricingCards } from '../../pricing/components/PricingCards';
import Placeholder from './placeholder.png';

export default function Content() {
  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight'>Demo</h2>
      <p className='text-muted-foreground'>
        Here is a quick demo of what you can achieve with OneFlow:
      </p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <Card>
          <CardHeader className='items-start justify-start'>
            <CardTitle>
              Find Your Best Match of Financial Solution in Real-Time
            </CardTitle>
            <CardDescription>
              Our domain database and advanced Algorithm will help you find the
              best financial solution in real-time.
            </CardDescription>
          </CardHeader>
          <CardContent className='item-center'>
            <p className='text-sm'>
              With OneFlow, you can receive the insights and recommendations you
              need to make informed financial decisions tailored to your unique
              situation.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='items-start justify-start'>
            <CardTitle>Create your own financial workflow</CardTitle>
            <CardDescription>
              Automate your financial processes with our powerful workflow
              builder, built-in templates, integrations, and more.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              OneFlow provides a powerful and flexible workflow builder that
              allows you to create custom workflows to automate your financial
              processes
            </p>
            <p>
              We also provided a set of pre-built templates and integrations to
              get you started quickly.
            </p>
          </CardContent>
        </Card>
      </div>
      <h2 className='mb-8 text-3xl font-bold tracking-tight'>Features</h2>
      <Tabs
        className='w-full max-w-3xl scale-110'
        defaultValue='Domain database'
      >
        <TabsList className='flex h-fit flex-wrap overflow-x-auto'>
          <TabsTrigger value='Domain database'>Domain database</TabsTrigger>
          <TabsTrigger value='Custom workflow builder'>
            Custom workflow builder
          </TabsTrigger>
          <TabsTrigger value='Insights and reports'>
            Insights and reports
          </TabsTrigger>
          <TabsTrigger value='Underlying Magic 🎩'>
            Underlying Magic 🎩
          </TabsTrigger>
        </TabsList>
        <TabsContent value='Domain database'>
          Our domain database is a collection of financial solutions and their
          details. It is constantly updated with the latest information to
          provide you with the most accurate and up-to-date recommendations.
          <Image alt='Domain database' src={Placeholder} />
        </TabsContent>
        <TabsContent value='Custom workflow builder'>
          Our custom workflow builder allows you to create custom workflows
          tailored to your unique needs with ease. You can automate your
          financial processes, integrate with other tools, and more.
          <Image alt='Custom workflow builder' src={Placeholder} />
        </TabsContent>
        <TabsContent value='Insights and reports'>
          Our insights and reports feature provides you with valuable domain
          insights into your financial data, helping you make informed
          decisions. You can generate reports, track your progress, and more.
          <Image alt='Insights and reports' src={Placeholder} />
        </TabsContent>
        <TabsContent value='Underlying Magic 🎩'>
          Our underlying magic is our advanced algorithm that powers OneFlow. It
          analyzes your financial data, identifies patterns, and provides you
          with personalized recommendations and insights.
          <Image alt='Underlying Magic 🎩' src={Placeholder} />
        </TabsContent>
      </Tabs>
      <Link
        className={`${cn(buttonVariants({ size: 'lg' }))} mt-8`}
        href='/auth/login'
      >
        Try it for free now <Icons.ChevronRight />
      </Link>

      <h2 className='mt-16 text-3xl font-bold tracking-tight'>
        What our users say
      </h2>
      <h3 className='text-muted-foreground'>
        Don&apos;t just take our word for it. Here&apos;s what our early users
        have to say about OneFlow:
      </h3>

      {/* Parallax Scroll Cards */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
        <div className='flex flex-col gap-4'>
          {testimonialCards1.map(card => (
            <Card key={card.name}>
              <CardHeader className='items-start justify-start'>
                <CardTitle>{card.name}</CardTitle>
                <CardDescription>{card.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <Icons.Quote />
                <p>{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className='text-muted-foreground md:hidden'>
          Use your desktop to see more testimonials...
        </p>
        <div className='hidden flex-col gap-4 md:flex'>
          {testimonialCards2.map(card => (
            <Card key={card.name}>
              <CardHeader className='items-start justify-start'>
                <CardTitle>{card.name}</CardTitle>
                <CardDescription>{card.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <Icons.Quote />
                <p>{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='hidden flex-col gap-4 md:flex'>
          {testimonialCards3.map(card => (
            <Card key={card.name}>
              <CardHeader className='items-start justify-start'>
                <CardTitle>{card.name}</CardTitle>
                <CardDescription>{card.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <Icons.Quote />
                <p>{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Link
        className={`${cn(buttonVariants({ size: 'lg' }))} mt-8`}
        href='/auth/login'
      >
        Try it for free now <Icons.ChevronRight />
      </Link>

      <h2 className='mt-16 text-3xl font-bold tracking-tight'>Pricing</h2>
      <Link className='underline' href='/pricing'>
        Learn more about our pricing?
      </Link>
      <PricingCards />
      <Link
        className={`${cn(buttonVariants({ size: 'lg' }))} mt-8`}
        href='/auth/login'
      >
        Try it for free now <Icons.ChevronRight />
      </Link>
    </>
  );
}

const testimonialCards1 = [
  {
    name: '😃 Mark Johnson',
    title: 'E-commerce Entrepreneur',
    content:
      'OneFlow has been a game-changer for my business. It has helped me automate my financial workflows and save time. I highly recommend it!',
  },
  {
    name: '🚀 Sarah Smith',
    title: 'Startup Founder',
    content:
      'OneFlow has helped me streamline my financial processes and make better decisions. The insights and recommendations are invaluable!',
  },
  {
    name: '🌟 John Doe',
    title: 'Freelancer',
    content:
      'OneFlow has made it easy for me to manage my finances and stay organized. I love the custom workflows and integrations!',
  },
];

const testimonialCards2 = [
  {
    name: '🎉 Jane Doe',
    title: 'Small Business Owner',
    content:
      'OneFlow has helped me automate my financial workflows and save time. It has made a huge difference in my business!',
  },
  {
    name: '🔥 Alex Johnson',
    title: 'Financial Analyst',
    content:
      'OneFlow has helped me analyze financial data and generate reports quickly. It has saved me hours of work!',
  },
  {
    name: '🌈 Emily Smith',
    title: 'Consultant',
    content:
      'OneFlow has helped me streamline my financial processes and make better decisions. The insights and recommendations are invaluable!',
  },
];

const testimonialCards3 = [
  {
    name: '🎨 Jessica Brown',
    title: 'Designer',
    content:
      'OneFlow has made it easy for me to manage my finances and stay organized. I love the custom workflows and integrations!',
  },
  {
    name: '🌺 Michael Johnson',
    title: 'Entrepreneur',
    content:
      'OneFlow has been a game-changer for my business. It has helped me automate my financial workflows and save time. I highly recommend it!',
  },
  {
    name: '🚀 Sarah Smith',
    title: 'Startup Founder',
    content:
      'OneFlow has helped me streamline my financial processes and make better decisions. The insights and recommendations are invaluable!',
  },
];
