import type { Edge, Node } from '@xyflow/react';

export function exportFlow(nodes: Node[], edges: Edge[]) {
  return JSON.stringify({ nodes, edges });
}
