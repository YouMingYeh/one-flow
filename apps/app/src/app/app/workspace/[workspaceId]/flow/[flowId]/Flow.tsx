'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { Connection, Node, Edge, InternalNode } from '@xyflow/react';
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
  cn,
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
// import {
//   nodes as initialNodes,
//   edges as initialEdges,
// } from '../../../../../../modules/flow/components/initial-elements';
import AnnotationNode from '../../../../../../modules/flow/components/AnnotationNode';
import ToolbarNode from '../../../../../../modules/flow/components/ToolbarNode';
import ResizerNode from '../../../../../../modules/flow/components/ResizerNode';
import CircleNode from '../../../../../../modules/flow/components/CircleNode';
import './overview.css';
import '@xyflow/react/dist/style.css';
import Sidebar from '../../../../../../modules/flow/components/Sidebar';
import CustomEdge from '../../../../../../modules/flow/components/CustomEdge';
import { exportFlow } from '../../../../../../modules/flow/utils';
import createSupabaseClientClient from '../../../../../../../lib/supabase/client';
import useOnScreen from './useOnScreen';

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

interface FlowProps {
  workspaceId: string;
  flowId: string;
  initialNodes: Node[];
  initialEdges: Edge[];
}

const Flow = ({
  workspaceId,
  flowId,
  initialNodes,
  initialEdges,
}: FlowProps) => {
  const store = useStoreApi();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [nodeConfig, setNodeConfig] = useState<Node>({} as Node);
  const { getInternalNode } = useReactFlow();
  const [openDialog, setOpenDialog] = useState<Edge | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    setEdges(es =>
      es.map(e => {
        e.type = 'custom';
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

  const onNodeClick = useCallback((_: unknown, node: Node) => {
    setOpenSidebar(true);
    setNodeConfig(node);
  }, []);

  const onAddNode = useCallback(
    (type: string) => {
      const node = {
        id: `${nodes.length + 1}`,
        type,
        position: {
          x: 0,
          y: 0,
        },
        data: {},
      };

      setNodes(nds => [...nds, node]);
    },
    [nodes, setNodes],
  );
  const onEdgeDoubleClick = useCallback((_: unknown, edge: Edge) => {
    setOpenDialog(edge);
  }, []);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const isOnScreen = useOnScreen(messagesEndRef);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={cn(
          'absolute top-3 z-50 flex w-full items-center justify-center',
          isOnScreen ? 'hidden' : '',
        )}
      >
        <Button onClick={scrollToBottom}>Scroll to bottom 👇</Button>
      </div>
      <div className='relative h-full w-full'>
        <ReactFlow
          className='overview'
          edgeTypes={edgeTypes}
          edges={edges}
          fitView
          nodeTypes={nodeTypes}
          nodes={nodes}
          onConnect={onConnect}
          onEdgeDoubleClick={onEdgeDoubleClick}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onNodeDrag={onNodeDrag}
          onNodeDragStop={onNodeDragStop}
          onNodesChange={onNodesChange}
        >
          <MiniMap pannable zoomable />
          <Controls className='z-30' />
          <Background />
          <div className='absolute bottom-4 flex w-full items-center justify-center gap-2'>
            <Button
              className='z-20 border'
              onClick={() => {
                setOpenSidebar(!openSidebar);
              }}
              variant='secondary'
            >
              Open Sidebar
            </Button>
            <Button
              className='z-20 border'
              onClick={() => {
                onAddNode('default');
                toast({
                  title: 'Node added',
                  description:
                    'A new node was added to the flow, you can click on it to edit its properties or drag it around to connect it to other nodes.',
                });
              }}
              variant='secondary'
            >
              Add Node
            </Button>
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
                    setNodes([]);
                    setEdges([]);
                    toast({
                      title: 'Flow cleared',
                      description:
                        'All nodes and edges were removed from the flow.',
                    });
                  }}
                  variant='destructive'
                >
                  Clear All <Icons.Trash2 />
                </Button>
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
                <Button
                  className='flex justify-between'
                  onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'application/json';
                    input.onchange = e => {
                      if (!e.target) {
                        return;
                      }
                      const file = (e.target as HTMLInputElement).files?.[0];

                      const reader = new FileReader();
                      reader.onload = event => {
                        if (!event.target) {
                          return;
                        }
                        const flow = event.target.result as string;
                        // Parse the JSON file and handle the data
                        try {
                          JSON.parse(flow);
                          // Handle the parsed flow data
                          toast({
                            title: 'Flow imported',
                            description: 'The flow was successfully imported.',
                          });
                        } catch (error) {
                          toast({
                            title: 'Error importing flow',
                            description:
                              'There was an error importing the flow. Please try again.',
                            variant: 'destructive',
                          });
                        }
                      };
                      if (!file) {
                        return;
                      }
                      reader.readAsText(file);
                    };
                    input.click();
                  }}
                >
                  Import <Icons.Upload />
                </Button>

                <SaveButton edges={edges} flowId={flowId} nodes={nodes} />
                <Button
                  className='flex justify-between'
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
                  title: 'You are now in preview mode',
                  description:
                    'You can now preview the flow. You can exit preview mode by clicking the Edit Preview button.',
                });

                router.push(
                  `/app/workspace/${workspaceId}/flow/${flowId}?preview=true`,
                );
              }}
            >
              Preview Flow <Icons.ScanEye />
            </Button>
          </div>
        </ReactFlow>

        <Dialog
          onOpenChange={open => {
            if (!open) {
              setOpenDialog(null);
            }
          }}
          open={openDialog !== null}
        >
          <DialogTrigger />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit this Edge</DialogTitle>
              <div>
                <Label>Label</Label>
                <Input
                  onChange={e => {
                    if (!openDialog) {
                      return;
                    }
                    setOpenDialog({
                      ...openDialog,
                      label: e.target.value,
                    });
                  }}
                  type='text'
                  value={openDialog?.label as string}
                />
              </div>
              <div>
                <Label>Animated</Label>
                <Input
                  checked={openDialog?.animated}
                  onChange={e => {
                    if (!openDialog) {
                      return;
                    }
                    setOpenDialog({
                      ...openDialog,

                      animated: e.target.checked,
                    });
                  }}
                  type='checkbox'
                />
              </div>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => {
                  setOpenDialog(null);
                }}
                variant='secondary'
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  if (!openDialog) {
                    return null;
                  }
                  setEdges(egs =>
                    egs.map(edge => {
                      if (edge.id === openDialog.id) {
                        return {
                          ...edge,
                          label: openDialog.label as string,
                          animated: openDialog.animated!,
                        };
                      }
                      return edge;
                    }),
                  );
                  setOpenDialog(null);
                }}
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div ref={messagesEndRef} />

        <Sidebar
          nodeConfig={nodeConfig}
          open={openSidebar}
          setNodeConfig={setNodeConfig}
          setOpen={setOpenSidebar}
        />
      </div>
    </>
  );
};

export default Flow;

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
            <Label>Public to Anyone?</Label>
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
