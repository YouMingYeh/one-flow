'use client';

import { Skeleton } from 'ui';

export function FlowCardsSkeleton() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <div>
        <Skeleton className='h-16 rounded-xl' />
        <Skeleton className='mt-2 h-4' />
        <Skeleton className='mt-2 h-4' />
      </div>
      <div>
        <Skeleton className='h-16 rounded-xl' />
        <Skeleton className='mt-2 h-4' />
        <Skeleton className='mt-2 h-4' />
      </div>
      <div>
        <Skeleton className='h-16 rounded-xl' />
        <Skeleton className='mt-2 h-4' />
        <Skeleton className='mt-2 h-4' />
      </div>
      <div>
        <Skeleton className='h-16 rounded-xl' />
        <Skeleton className='mt-2 h-4' />
        <Skeleton className='mt-2 h-4' />
      </div>
      <div>
        <Skeleton className='h-16 rounded-xl' />
        <Skeleton className='mt-2 h-4' />
        <Skeleton className='mt-2 h-4' />
      </div>
    </div>
  );
}
