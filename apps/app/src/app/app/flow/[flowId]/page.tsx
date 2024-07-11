import type { Edge, Node } from '@xyflow/react';
import { getSavedFlowById } from '../../../../modules/flow/actions';
import Flow from './Flow';

const Page = async ({ params }: { params: { flowId: string } }) => {
  const flow = await getSavedFlowById(params.flowId);

  const { content } = flow;
  const { nodes, edges } = JSON.parse(content) as {
    nodes: Node[];
    edges: Edge[];
  };

  return (
    <div className='relative h-full w-full'>
      <Flow initialEdges={edges} initialNodes={nodes} />
    </div>
  );
};

export default Page;
