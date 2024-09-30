'use server';

import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import createSupabaseServerClient from '../../../../../lib/supabase/server';
import Cong from './cong.svg';

const Page = async ({ params }: { params: { id: string } }) => {
  const supabase = await createSupabaseServerClient();

  await supabase
    .from('early_access')
    .update({ beta: true })
    .eq('id', params.id)
    .select();

  return (
    <section className='flex flex-col gap-4 justify-center items-center pt-16'>
      <h1 className='text-2xl font-bold'>
        恭喜你正式成為 OneFlow 的內側用戶！
      </h1>
      <p className='text-md'>
        我們會盡快與您聯繫，提供更多內測資訊，請留意您的郵箱。
      </p>
      <Image alt='congratulation' className='w-72 m-auto' src={Cong as StaticImport} />
    </section>
  );
};

export default Page;
