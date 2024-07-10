'use client';
import React, { useCallback, useEffect, useState } from 'react';
import type { Connection, Node, InternalNode, Edge } from '@xyflow/react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useStoreApi,
  useReactFlow,
  MarkerType,
} from '@xyflow/react';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icons,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  useToast,
} from 'ui';
import { useRouter } from 'next/navigation';
import {
  nodes as initialNodes,
  edges as initialEdges,
} from '../../../../../../modules/flow/components/initial-elements';
import AnnotationNode from '../../../../../../modules/flow/components/AnnotationNode';
import ToolbarNode from '../../../../../../modules/flow/components/ToolbarNode';
import ResizerNode from '../../../../../../modules/flow/components/ResizerNode';
import CircleNode from '../../../../../../modules/flow/components/CircleNode';
import './overview.css';
import '@xyflow/react/dist/style.css';
import CustomEdge from '../../../../../../modules/flow/components/CustomEdge';
import { exportFlow } from '../../../../../../modules/flow/utils';
import createSupabaseClientClient from '../../../../../../../lib/supabase/client';

const MIN_DISTANCE = 50;

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

interface FlowPreviewProps {
  workspaceId: string;
  flowId: string;
}

const FlowPreview = ({ workspaceId, flowId }: FlowPreviewProps) => {
  const store = useStoreApi();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeConfig, setNodeConfig] = useState<Node>({} as Node);
  const [running, setRunning] = useState(false);
  const { getInternalNode } = useReactFlow();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    setEdges(es =>
      es.map(e => {
        e.type = 'default';
        return e;
      }),
    );
  }, [setEdges]);

  useEffect(() => {
    setNodes(nds =>
      nds.map(node => {
        if (node.id === nodeConfig.id) {
          // it's important that you create a new node object
          // in order to notify react flow about the change
          return {
            ...node,
            ...nodeConfig,
          };
        }

        return node;
      }),
    );
  }, [nodeConfig, setNodes]);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges(eds => addEdge({ ...params, type: 'custom' }, eds));
    },
    [setEdges],
  );

  const getClosestEdge = useCallback(
    (node: Node) => {
      const { nodeLookup } = store.getState();
      const internalNode = getInternalNode(node.id);
      if (!internalNode) {
        return null;
      }

      const closestNode = Array.from(nodeLookup.values()).reduce(
        (
          res: {
            distance: number;
            node: InternalNode | null;
          },
          n,
        ) => {
          if (n.id !== internalNode.id) {
            const dx =
              n.internals.positionAbsolute.x -
              internalNode.internals.positionAbsolute.x;
            const dy =
              n.internals.positionAbsolute.y -
              internalNode.internals.positionAbsolute.y;
            const d = Math.sqrt(dx * dx + dy * dy);

            if (d < res.distance && d < MIN_DISTANCE) {
              res.distance = d;
              res.node = n;
            }
          }

          return res;
        },
        {
          distance: Number.MAX_VALUE,
          node: null,
        },
      );

      if (!closestNode.node) {
        return null;
      }

      const closeNodeIsSource =
        closestNode.node.internals.positionAbsolute.x <
        internalNode.internals.positionAbsolute.x;

      return {
        id: closeNodeIsSource
          ? `${closestNode.node.id}-${node.id}`
          : `${node.id}-${closestNode.node.id}`,
        source: closeNodeIsSource ? closestNode.node.id : node.id,
        target: closeNodeIsSource ? node.id : closestNode.node.id,
        className: '',
      };
    },
    [getInternalNode, store],
  );

  const onNodeDrag = useCallback(
    (_: unknown, node: Node) => {
      const closeEdge = getClosestEdge(node);

      setEdges(es => {
        const nextEdges = es.filter(e => e.className !== 'temp');

        if (
          closeEdge &&
          !nextEdges.find(
            ne =>
              ne.source === closeEdge.source && ne.target === closeEdge.target,
          )
        ) {
          closeEdge.className = 'temp';
          nextEdges.push({
            ...closeEdge,
            animated: false,
            type: 'custom',
            markerEnd: { type: MarkerType.Arrow },
          });
        }
        setNodeConfig(node);
        return nextEdges;
      });
    },
    [getClosestEdge, setEdges],
  );

  const onNodeDragStop = useCallback(
    (_: unknown, node: Node) => {
      const closeEdge = getClosestEdge(node);

      setEdges(es => {
        const nextEdges = es.filter(e => e.className !== 'temp');

        if (
          closeEdge &&
          !nextEdges.find(
            ne =>
              ne.source === closeEdge.source && ne.target === closeEdge.target,
          )
        ) {
          nextEdges.push({
            ...closeEdge,
            animated: false,
            type: 'custom',
            markerEnd: { type: MarkerType.Arrow },
          });
        }
        setNodeConfig(node);
        return nextEdges;
      });
    },
    [getClosestEdge, setEdges],
  );

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
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodeDrag={onNodeDrag}
        onNodeDragStop={onNodeDragStop}
        onNodesChange={onNodesChange}
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
            <PopoverContent className='flex w-fit flex-col gap-2'>
              <Button
                className='flex justify-between'
                onClick={() => {
                  // download the flow as json file
                  const flow = exportFlow(nodes, edges);
                  const blob = new Blob([flow], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'flow.json';
                  a.click();
                  URL.revokeObjectURL(url);
                  toast({
                    title: 'Flow exported',
                    description:
                      'The flow was exported as a json file. You can import it in another flow by clicking the import button.',
                  });
                }}
              >
                Export <Icons.Download />
              </Button>
              <SaveButton edges={edges} flowId={flowId} nodes={nodes} />
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
              toast({
                title: 'You are now editing the flow',
                description:
                  'You can preview or run the flow by clicking the Preview button.',
              });
              router.push(
                `/app/workspace/${workspaceId}/flow/${flowId}?preview=false`,
              );
            }}
          >
            Edit Flow <Icons.Edit />
          </Button>

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
    </div>
  );
};

export default FlowPreview;

function SaveButton({
  flowId,
  nodes,
  edges,
}: {
  flowId: string;
  nodes: Node[];
  edges: Edge[];
}) {
  const { toast } = useToast();
  const [savedFlows, setSavedFlows] = useState<SavedFlow[]>([]);
  const [overrideFlow, setOverrideFlow] = useState<SavedFlow | null>(null);
  const [version, setVersion] = useState(1);
  const [name, setName] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    const fetchFlows = async () => {
      const supabase = createSupabaseClientClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return;
      }
      const { data, error } = await supabase
        .from('saved_flow')
        .select()
        .eq('user_id', user.id);
      if (error) {
        return;
      }
      setSavedFlows(data as SavedFlow[]);
    };
    void fetchFlows();
  }, []);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex justify-between'>
          Save <Icons.Save />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save To Database</DialogTitle>
        </DialogHeader>
        <Button
          className='flex w-full gap-2'
          onClick={async () => {
            const supabase = createSupabaseClientClient();
            const {
              data: { user },
            } = await supabase.auth.getUser();
            if (!user) {
              return;
            }

            await supabase.from('flow').upsert({
              id: flowId,
              content: exportFlow(nodes, edges),
            });

            toast({
              title: 'Flow saved',
              description:
                'The flow was saved to the database. You can safely close this flow.',
            });
          }}
          size='lg'
        >
          Quick Save <Icons.Check />
        </Button>
        <Separator className='my-6' />
        <div className='flex flex-col gap-2'>
          <div>
            <Label>Name</Label>
            <Input
              onChange={e => {
                setName(e.target.value);
              }}
              type='text'
              value={name}
            />
          </div>
          <div>
            <Label>Public</Label>
            <Input
              checked={isPublic}
              onChange={e => {
                setIsPublic(e.target.checked);
              }}
              type='checkbox'
            />
          </div>
          <div>
            <Label>Version</Label>
            <Input
              onChange={e => {
                setVersion(parseInt(e.target.value, 10));
              }}
              type='number'
              value={version}
            />
          </div>
          <div>
            <Label>Create New or Override</Label>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select an existing flow to override...' />
              </SelectTrigger>
              <SelectContent>
                {savedFlows.map(flow => (
                  <SelectItem
                    key={flow.id}
                    onClick={() => {
                      setOverrideFlow(flow);
                    }}
                    value={flow.id}
                  >
                    {flow.name}
                  </SelectItem>
                ))}
                <SelectItem
                  onClick={() => {
                    setOverrideFlow(null);
                  }}
                  value='Create New'
                >
                  Create New
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant='secondary'>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={async () => {
                const supabase = createSupabaseClientClient();
                const {
                  data: { user },
                } = await supabase.auth.getUser();
                if (!user) {
                  return;
                }
                await supabase.from('saved_flow').upsert({
                  id: overrideFlow?.id,
                  user_id: user.id,
                  name,
                  version,
                  public: isPublic,
                  content: exportFlow(nodes, edges),
                });
                await supabase.from('flow').upsert({
                  id: flowId,
                  content: exportFlow(nodes, edges),
                });

                toast({
                  title: 'Flow saved',
                  description:
                    'The flow was saved to the database. You can access it later by going to the flows page on the left sidebar.',
                });
              }}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
