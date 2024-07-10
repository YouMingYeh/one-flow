import { Separator, nameToIcon } from 'ui';
import { notFound, redirect } from 'next/navigation';
import type { Edge, Node } from '@xyflow/react';
import createSupabaseServerClient from '../../../../../../../lib/supabase/server';
import { updateActivity } from '../../../../../../modules/recent/actions';
import EditFlowButton from '../../../../../../modules/workspace/components/EditFlowButton';
import DeleteFlowButton from '../../../../../../modules/workspace/components/DeleteFlowButton';
import Flow from './Flow';
import FlowPreview from './FlowPreview';

const RecentPage = async ({
  params,
  searchParams,
}: {
  params: { workspaceId: string; flowId: string };
  searchParams: { preview: string };
}) => {
  const isPreview = searchParams.preview === 'true';
  const supabase = await createSupabaseServerClient();
  const { data: sessionData } = await supabase.auth.getSession();

  const user = sessionData.session?.user;
  if (!user) {
    redirect('/auth/login');
  }

  const { data } = await supabase.from('flow').select().eq('id', params.flowId);

  const flow = data?.[0] as Flow | null;
  if (!flow) {
    notFound();
  }

  await updateActivity({
    user_id: user.id,
    flow_id: flow.id,
    workspace_id: flow.workspace_id,
    created_at: new Date(),
  });

  const initialContent = JSON.parse(flow.content) as {
    nodes: Node[];
    edges: Edge[];
  } | null;
  const initialNodes = initialContent ? initialContent.nodes : [];
  const initialEdges = initialContent ? initialContent.edges : [];

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
      <div className='relative h-[80vh] w-full'>
        {isPreview ? (
          <FlowPreview
            flowId={params.flowId}
            workspaceId={params.workspaceId}
          />
        ) : (
          <Flow flowId={params.flowId} initialEdges={initialEdges} initialNodes={initialNodes} workspaceId={params.workspaceId} />
        )}
      </div>
    </div>
  );
};

export default RecentPage;
