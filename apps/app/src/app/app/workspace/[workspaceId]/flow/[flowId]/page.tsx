import { Separator, nameToIcon } from 'ui';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import createSupabaseServerClient from '../../../../../../../lib/supabase/server';
import { updateActivity } from '../../../../../../modules/recent/actions';
import EditFlowButton from '../../../../../../modules/workspace/components/EditFlowButton';
import DeleteFlowButton from '../../../../../../modules/workspace/components/DeleteFlowButton';

const RecentPage = async ({ params }: { params: { flowId: string } }) => {
  const supabase = await createSupabaseServerClient();
  const { data: sessionData } = await supabase.auth.getSession();

  const user = sessionData.session?.user;
  if (!user) {
    redirect('/auth/login');
  }

  const { data } = await supabase.from('flow').select().eq('id', params.flowId);

  if (!data) {
    return (
      <div>
        <h1>Flow not found or still loading...</h1>
        <Link className='underline' href='/app/workspace'>
          Go back to workspaces
        </Link>
      </div>
    );
  }
  const flow = data[0] as Flow;

  await updateActivity({
    user_id: user.id,
    flow_id: flow.id,
    workspace_id: flow.workspace_id,
    created_at: new Date(),
  });

  return (
    <div className='space-y-6 px-10'>
      <div className='relative space-y-0.5'>
        <h2 className='flex gap-2 text-2xl font-bold tracking-tight'>
          {nameToIcon(flow.icon)}
          {flow.name}
        </h2>
        <p className='text-muted-foreground'>{flow.description}</p>
        <div className='absolute right-0 top-0 flex flex-col gap-1'>
          <EditFlowButton flow={flow} />
          <DeleteFlowButton flowId={flow.id} />
        </div>
      </div>
      <Separator className='my-6' />
      <div className='relative h-full w-full'>Not implemented yet</div>
    </div>
  );
};

export default RecentPage;
