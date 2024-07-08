'use client';

import { Button, Icons } from 'ui';
import Link from 'next/link';
import { PricingCard } from './PricingCard';

export function PricingCards() {
  return (
    <div className='bg-muted dark:bg-muted-foreground grid grid-cols-1 gap-6 p-12 lg:grid-cols-3'>
      {items.map(item => (
        <PricingCard
          button={item.button}
          description={item.description}
          features={item.features}
          key={item.plan}
          plan={item.plan}
          price={item.price}
        />
      ))}
    </div>
  );
}

const items = [
  {
    plan: 'Basic',
    description: 'Perfect for individuals with light usage.',
    price: '$4.9/month',
    features: [
      '1000 credits per month',
      'Unlimited workspaces and projects',
      'All basic features',
      'Add-ons: $0.1 per 10 credits',
    ],
    button: (
      <Link className='w-full' href='/app/billing?plan=basic'>
        <Button>
          Get Started <Icons.ChevronRight />
        </Button>
      </Link>
    ),
  },
  {
    plan: 'Standard',
    description: 'Great for small teams and businesses with moderate usage.',
    price: '$9.9/month',
    features: [
      '5000 credits per month',
      'Unlimited workspaces and projects',
      'All basic features',
      'Add-ons: $0.05 per 10 credits',
    ],
    button: (
      <Link className='w-full' href='/app/billing?plan=standard'>
        <Button>
          Get Started <Icons.ChevronRight />
        </Button>
      </Link>
    ),
  },
  {
    plan: 'Premium',
    description: 'Ideal for large teams and businesses with heavy usage.',
    price: '$19.9/month',
    features: [
      '10000 credits per month',
      'Unlimited workspaces and projects',
      'All basic features',
      'Add-ons: $0.01 per 10 credits',
    ],
    button: (
      <Link className='w-full' href='/app/billing?plan=premium'>
        <Button>
          Get Started <Icons.ChevronRight />
        </Button>
      </Link>
    ),
  },
];

export default PricingCards;
