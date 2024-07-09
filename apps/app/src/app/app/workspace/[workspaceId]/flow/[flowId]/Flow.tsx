/* eslint-disable */
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
} from 'ui';
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
import Sidebar from '../../../../../../modules/flow/components/Sidebar';
import CustomEdge from '../../../../../../modules/flow/components/CustomEdge';
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


const Flow = () => {
  const store = useStoreApi();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [nodeConfig, setNodeConfig] = useState<Node>({} as Node);
  const { getInternalNode } = useReactFlow();
  const [openDialog, setOpenDialog] = useState<Edge | null>(null);

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
            animated: true,
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
            animated: true,
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
          <Controls />
          <Background />
          <div className='absolute bottom-4 z-20 flex w-full items-center justify-center gap-2'>
            <Button
              className='border'
              onClick={() => {
                setOpenSidebar(!openSidebar);
              }}
              variant='secondary'
            >
              Open Sidebar
            </Button>
            <Button
              className='border'
              onClick={() => {
                onAddNode('default');
              }}
              variant='secondary'
            >
              Add Node
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button size='icon' variant='secondary'>
                  <Icons.VerticalEllipsis />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='flex w-fit flex-col gap-2'>
                <Button
                  onClick={() => {
                    setNodes([]);
                    setEdges([]);
                  }}
                  variant='destructive'
                >
                  Clear All
                </Button>
                <Button onClick={() => {}}>Export</Button>
                <Button onClick={() => {}}>Import</Button>
                <Button onClick={() => {}}>Save</Button>
                <Button onClick={() => {}}>Share</Button>
              </PopoverContent>
            </Popover>

            <Button className='border'>
              Run Flow <Icons.Wand />
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
                  setEdges(edges =>
                    edges.map(edge => {
                      
                      if (edge.id === openDialog?.id) {
                        return {
                          ...edge,
                          label: openDialog.label as string,
                          animated: openDialog.animated as boolean,
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
