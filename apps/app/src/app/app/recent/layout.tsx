import type { ReactNode } from 'react';
import { Separator } from 'ui/src/components/ui/separator';

const RecentLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className='space-y-6 px-10'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Recent</h2>
        <p className='text-muted-foreground'>
          Here are the most recent items you have interacted with.
        </p>
      </div>
      <Separator className='my-6' />
      <div className='flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0'>
        <div className='flex-1 lg:max-w-2xl'>{children}</div>
      </div>
    </div>
  );
};

export default RecentLayout;
