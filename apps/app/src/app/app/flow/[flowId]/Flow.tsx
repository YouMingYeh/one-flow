'use client';
import React, { useEffect, useState } from 'react';
import type { Node, Edge } from '@xyflow/react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import {
  Button,
  cn,
  Icons,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  useToast,
} from 'ui';
import './overview.css';
import '@xyflow/react/dist/style.css';
import AnnotationNode from '../../../../modules/flow/components/AnnotationNode';
import CustomEdge from '../../../../modules/flow/components/CustomEdge';
import { exportFlow } from '../../../../modules/flow/utils';
import DraggableCard from './DraggableCard';

const nodeTypes = {
  annotation: AnnotationNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

interface FlowProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

const Flow = ({ initialEdges, initialNodes }: FlowProps) => {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [activatedNode, setActivatedNode] = useState<Node | null>(null);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const [running, setRunning] = useState(false);
  const [store, setStore] = useState({});
  const { toast } = useToast();

  const nextNodes = activatedNode
    ? getNextNodes(activatedNode, edges, nodes)
    : [];

  useEffect(() => {
    if (running) {
      setNodes(nds =>
        nds.map(nd => {
          if (nd.id === activatedNode?.id) {
            return {
              ...nd,
              className: cn(nd.className, 'opacity-100'),
            };
          }
          return {
            ...nd,
            className: cn(nd.className, 'opacity-50'),
          };
        }),
      );
    } else {
      setStore({});
      toast({
        title: 'Flow stopped',
        description: 'The flow was stopped. You can now start it again.',
      });
      setNodes(initialNodes);
      setEdges(initialEdges);
    }
  }, [
    activatedNode?.id,
    initialEdges,
    initialNodes,
    running,
    setEdges,
    setNodes,
    toast,
  ]);

  return (
    <div className='bg-background fixed bottom-0 left-0 right-0 top-0 h-full w-full'>
      <ReactFlow
        className='overview bg-background z-40 h-full w-full'
        draggable={false}
        edgeTypes={edgeTypes}
        edges={edges}
        edgesFocusable={false}
        elementsSelectable={false}
        fitView
        nodeTypes={nodeTypes}
        nodes={nodes}
        nodesConnectable={false}
        nodesDraggable={false}
        nodesFocusable={false}
      >
        <MiniMap pannable zoomable />
        <Controls showInteractive={false} />
        <Background />
        <div className='absolute bottom-4 flex w-full items-center justify-center gap-2'>
          <Popover>
            <PopoverTrigger asChild>
              <Button className='z-20 border' size='icon' variant='secondary'>
                <Icons.VerticalEllipsis />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Button
                className='z-20 flex gap-1 border'
                onClick={() => {
                  toast({
                    title: 'Not implemented',
                    description: 'This feature is not implemented yet.',
                  });
                }}
              >
                Settings <Icons.Settings />
              </Button>
              <Button
                className='z-20 flex gap-1 border'
                onClick={() => {
                  const flow = exportFlow(nodes, edges);

                  // convert into json file
                  const blob = new Blob([flow], { type: 'application/json' });
                  void navigator.clipboard.writeText(flow);

                  if (
                    !navigator.canShare({
                      title: 'Flow',
                      text: 'Check out this flow',
                      files: [new File([blob], 'flow.json')],
                    })
                  ) {
                    toast({
                      title: 'Share not supported but copied to clipboard',
                      description:
                        'Your browser does not support the share API. The flow was copied to your clipboard.',
                    });
                    return;
                  }
                  void navigator.share({
                    title: 'Flow',
                    text: 'Check out this flow',
                    files: [new File([blob], 'flow.json')],
                  });

                  toast({
                    title: 'Flow shared and saved to clipboard',
                    description:
                      'The flow was shared with the share dialog. It was also copied to your clipboard.',
                  });
                }}
              >
                Share <Icons.Share2 />
              </Button>
            </PopoverContent>
          </Popover>

          <Button
            className='z-20 flex gap-1 border'
            onClick={() => {
              if (running) {
                setRunning(false);
                setEdges(
                  edges.map(edge => ({
                    ...edge,
                    animated: false,
                  })),
                );
                return;
              }
              setRunning(true);
              setEdges(
                edges.map(edge => ({
                  ...edge,
                  animated: true,
                })),
              );
              toast({
                title: 'Flow is running! 🚀',
                description:
                  'The flow is now running. You should see a pop-up showing the progress of the flow. You can stop the flow by clicking the Stop button.',
              });
            }}
          >
            {running ? (
              <>
                Stop <Icons.Spinner className='animate-spin' />
              </>
            ) : (
              <>
                Run Flow <Icons.Wand />
              </>
            )}
          </Button>
        </div>
      </ReactFlow>
      <DraggableCard
        className={cn(
          'z-100 fixed bottom-20 left-20 flex h-96 w-96 flex-col hover:cursor-grab',
          running ? '' : 'hidden',
        )}
        content={
          <>
            <Select
              onValueChange={value => {
                const node = nodes.find(nd => nd.id === value);
                setActivatedNode(node ? node : null);
              }}
              value={activatedNode?.id}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select starting node' />
              </SelectTrigger>
              <SelectContent>
                {nodes.map(node => (
                  <SelectItem key={node.id} value={node.id}>
                    {node.data.label as string}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div>{JSON.stringify(activatedNode?.data)}</div>
          </>
        }
        description={(activatedNode?.data.record as string) || 'None'}
        footer={
          <div className='flex w-full flex-col gap-2'>
            <Button
              className='w-full'
              onClick={() => {
                setRunning(false);
              }}
              variant='secondary'
            >
              Stop Flow
            </Button>
            {nextNodes.map(node => (
              <Button
                className='w-full'
                key={node.id}
                onClick={() => {
                  setActivatedNode(node);
                }}
              >
                {node.data.label as string}
              </Button>
            ))}
          </div>
        }
        title={(activatedNode?.data.label as string) || 'Please Select a Node'}
      />
      <DraggableCard
        className={cn(
          'z-100 fixed left-20 top-20 flex h-96 w-96 flex-col hover:cursor-grab',
          running ? '' : 'hidden',
        )}
        content={<>{JSON.stringify(store)}</>}
        description='Here shows the store of running flow, the data like Preferences/Settings will be updated in real-time.'
        footer={
          <div className='flex w-full flex-col gap-2'>
            <Button
              className='w-full'
              onClick={() => {
                setRunning(false);
              }}
              variant='secondary'
            >
              Stop Flow
            </Button>
          </div>
        }
        title='Data Store'
      />
    </div>
  );
};

export default Flow;

function getNextNodes(node: Node, edges: Edge[], nodes: Node[]): Node[] {
  const egs = edges.filter(edge => edge.source === node.id);
  return egs.map(edge => nodes.find(nd => nd.id === edge.target)!);
}
