'use client';
import type { NextPage } from 'next';
import { useOnborda } from 'onborda';
import { Button } from 'ui';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import clicking from './clicking.gif';

const RecentPage: NextPage = () => {
  const [onboarded, setOnboarded] = useState(false);
  const { startOnborda } = useOnborda();
  const router = useRouter();
  return (
    <div className='flex flex-row items-center gap-2'>
      <Button
        className='relative p-8 text-2xl'
        onClick={() => {
          startOnborda();
          setOnboarded(true);
        }}
        size='lg'
      >
        ✨ Guide Me!
        {!onboarded && (
          <Image alt='gif' className='absolute -right-2 w-16' src={clicking} />
        )}
      </Button>

      <Button
        className='relative p-8 text-2xl'
        onClick={() => {
          router.push('/app/cookbooks');
        }}
        size='lg'
      >
        📚 Cookbooks
      </Button>
    </div>
  );
};

export default RecentPage;
