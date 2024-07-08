import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <section className='space-y-6 pb-6 pt-4 md:pb-12 md:pt-6 lg:py-24'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <h1 className='font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          Pricing for{' '}
          <strong className='decoration-primary underline decoration-wavy'>
            OneFlow
          </strong>{' '}
        </h1>
        Not Implemented
        {/* <h2 className='px-8 text-lg'>
          <strong>We hate cancelling subscriptions</strong>, so we don&apos;t
          make you do it manually. Choose how many months you want to subscribe
          for, and we&apos;ll take care of the rest.
        </h2>
        <PricingCards />
        <Accordion className='w-full max-w-xl' collapsible type='single'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              What do you mean no manual cancellation or no auto renewal?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                We don&apos;t want you to have to remember to cancel your
                subscription if you don&apos;t want to continue using OneFlow.
                Instead, you choose how many months you want to subscribe for,
                we charge you for that period, and then your subscription ends.
                No need to cancel manually.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>How usage credits work?</AccordionTrigger>
            <AccordionContent>
              <p>
                Usage credits are the currency of OneFlow. You can use them to
                generate scripts, scrape web content, convert text to speech,
                and more. Each plan comes with a set number of credits per
                month. If you run out of credits, you can purchase more at any
                time.
              </p>
              <p>
                A clear explanation of how credits are used is available below:
              </p>
              <ul>
                <li> 1 credits per script generated</li>
                <li> 1 credits per scrape/chat request</li>
                <li> estimated 100 credits for a 10-minute audio file</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              What happens if I run out of credits?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                If you run out of credits, you won&apos;t be able to generate
                scripts, scrape web content, or convert text to speech. You can
                purchase more credits at any time at the rate stated in your
                plan.
              </p>
              <p>
                Go to our dashboard settings to view your credit balance and
                purchase more credits.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
      </div>
    </section>
  );
};

export default Page;
