import Link from 'next/link';
import { buttonVariants, Icons } from 'ui';

export default function NotFound() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='space-y-6'>
        <div className='flex items-center justify-center'>
          <Icons.logo className='h-32 w-32' />
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-lg font-semibold text-gray-900'>找不到页面</p>
        </div>
        <Link className={buttonVariants({})} href='/'>
          回到首页
        </Link>
      </div>
    </div>
  );
}
