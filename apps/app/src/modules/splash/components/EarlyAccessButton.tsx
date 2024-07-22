'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatedSubscribeButton, Icons } from 'ui';
import { getDictionary } from '../../../app/i18n';

const EarlyAccessButton = () => {
  const searchParams = useSearchParams();
  const dictionary = getDictionary(searchParams.get('lang') ?? 'en');
  const router = useRouter();
  return (
    <AnimatedSubscribeButton
      buttonColor='#000000'
      buttonTextColor='#ffffff'
      changeText={
        <span className='group inline-flex items-center justify-center'>
          <Icons.Check className='mr-2' />
          {dictionary.buttons.earlyAccessOK}
          <Icons.Spinner className='ml-2 animate-spin' />
        </span>
      }
      initialText={
        <span className='group inline-flex items-center justify-center'>
          <Icons.Rocket className='mr-2' />
          {dictionary.buttons.earlyAccess}
        </span>
      }
      onClick={() => {
        router.push('/early-access');
      }}
      subscribeStatus={false}
    />
  );
};

export default EarlyAccessButton;
