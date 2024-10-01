'use server';
import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { NumberTicker } from 'ui';
import createSupabaseServerClient from '../../../../../lib/supabase/server';
import Inbox from './inbox.svg';

const Page = async () => {
  const supabase = await createSupabaseServerClient();
  const { data } = (await supabase.from('state').select('*').single()) as {
    data: {
      id: string;
      early_access: number;
    };
  };

  const { early_access: earlyAccess } = data;
  void supabase
    .from('state')
    .upsert({ id: 'state', early_access: earlyAccess + 1 });

  return (
    <section className='flex flex-col items-center justify-center gap-4 pt-16'>
      <h1 className='text-2xl font-bold'>恭喜你受邀成为 OneFlow 的第</h1>
      <p className='text-primary text-4xl font-bold'>
        <NumberTicker className='text-primary' value={earlyAccess + 1} />
      </p>
      <h1 className='text-2xl font-bold'>个内侧用户！</h1>

      <p className='text-md'>请注意查收我们的邮件并确认您的内测意愿</p>
      <Image alt='inbox' className='m-auto w-72' src={Inbox as StaticImport} />
    </section>
  );
};

export default Page;
