import { Separator } from 'ui';
import { readWorkspaces } from '../../../modules/workspace/actions';
import { WorkspaceCards } from '../../../modules/workspace/components/workspaceCards';
import { WorkspaceCardsSkeleton } from '../../../modules/workspace/components/workspaceCardsSkeleton';

const RecentPage = async () => {
  const { data: workspaces } = await readWorkspaces();

  return (
    <div className='space-y-6 px-10'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Workspace</h2>
        <p className='text-muted-foreground'>
          You can view and manage your workspace here.
        </p>
      </div>
      <Separator className='my-6' />
      {workspaces ? (
        <WorkspaceCards workspaces={workspaces} />
      ) : (
        <WorkspaceCardsSkeleton />
      )}
    </div>
  );
};

export default RecentPage;
