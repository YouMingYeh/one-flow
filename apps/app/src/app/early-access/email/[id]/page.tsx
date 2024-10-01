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
    <section className='flex flex-col items-center justify-center gap-4 pt-16'>
      <h1 className='text-2xl font-bold'>
        恭喜你正式成为 OneFlow 的内侧用户！
      </h1>
      <p className='text-md'>
        我们会尽快与您联繫，提供更多内测资讯，请留意您的邮箱。
      </p>
      <Image
        alt='congratulation'
        className='m-auto w-72'
        src={Cong as StaticImport}
      />
    </section>
  );
};

export default Page;
