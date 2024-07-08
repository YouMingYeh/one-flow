import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'ui';

interface PricingCardProps extends React.HTMLAttributes<HTMLElement> {
  plan: string;
  description: string;
  price: string;
  features: string[];
  button: React.ReactNode;
}

export function PricingCard({
  plan,
  description,
  price,
  features,
  button,
}: PricingCardProps) {
  return (
    <Card
      className={`relative transform rounded-xl p-6 transition-transform ${
        plan === 'Standard'
          ? 'scale-105 border-2 border-blue-500 shadow-2xl'
          : 'border p-3 shadow-md'
      }`}
    >
      <CardHeader className='mb-4'>
        <CardTitle className='text-2xl font-bold'>
          {plan} <span className='text-lg font-semibold'>- {price}</span>
        </CardTitle>
        <CardDescription className=''>{description}</CardDescription>
        {plan === 'Standard' && (
          <div className='absolute -right-4 -top-4 flex rotate-12 transform items-center space-x-2'>
            <svg
              className='h-6 w-6 text-blue-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 13l4 4L19 7'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
            <span className='text-xl font-bold text-blue-500'>
              Most Popular!
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent className='mb-4'>
        <ul className='space-y-2'>
          {features.map(feature => (
            <li className='flex items-center text-sm' key={feature}>
              <svg
                className='mr-2 h-5 w-5 text-green-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5 13l4 4L19 7'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className='pt-4'>{button}</CardFooter>
    </Card>
  );
}
