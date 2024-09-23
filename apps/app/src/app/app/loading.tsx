import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import LoadingSVG from '../loading.svg';

export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='space-y-6'>
        <Image
          alt='Loading'
          height={100}
          src={LoadingSVG as StaticImport}
          width={100}
        />
        <div className='flex items-center justify-center'>
          <p className='text-lg font-semibold'>Please Wait 请稍等...</p>
        </div>
      </div>
    </div>
  );
}
