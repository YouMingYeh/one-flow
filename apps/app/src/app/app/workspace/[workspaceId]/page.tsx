import { Separator, nameToIcon } from 'ui';
import Link from 'next/link';
import createSupabaseServerClient from '../../../../../lib/supabase/server';
import { readFlows } from '../../../../modules/workspace/actions';
import { FlowCards } from '../../../../modules/workspace/components/flowCards';
import { FlowCardsSkeleton } from '../../../../modules/workspace/components/flowCardsSkeleton';
import EditWorkspaceButton from '../../../../modules/workspace/components/EditWorkspaceButton';
import DeleteWorkspaceButton from '../../../../modules/workspace/components/DeleteWorkspaceButton';

const Page = async ({ params }: { params: { workspaceId: string } }) => {
  const supabase = await createSupabaseServerClient();
  const { data: sessionData } = await supabase.auth.getSession();

  const user = sessionData.session?.user;
  if (!user) {
    return null;
  }

  const { data } = await supabase
    .from('workspace')
    .select()
    .eq('id', params.workspaceId);

  if (!data || data.length === 0) {
    return (
      <div>
        <h1>Workspace not found or still loading...</h1>
        <Link className='underline' href='/app/workspace'>
          Go back to workspaces
        </Link>
      </div>
    );
  }
  const workspace = data[0] as Workspace;
  const { data: flows } = await readFlows(params.workspaceId);
  return (
    <div className='space-y-6 px-10'>
      <div className='relative h-16 space-y-0.5'>
        <h2 className='flex items-center gap-2 text-2xl font-bold tracking-tight'>
          {nameToIcon(workspace.icon)}
          {workspace.name}
        </h2>
        <p className='text-muted-foreground'>{workspace.description}</p>
        {/* <SideNoteDrawer /> */}
        <div className='absolute right-0 top-0 flex flex-col gap-1'>
          <EditWorkspaceButton workspace={workspace} />
          <DeleteWorkspaceButton workspaceId={workspace.id} />
        </div>
      </div>

      <Separator className='my-6' />
      {flows ? (
        <FlowCards flows={flows} workspaceId={params.workspaceId} />
      ) : (
        <FlowCardsSkeleton />
      )}
    </div>
  );
};

export default Page;
