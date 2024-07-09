'use client';
import type { Node } from '@xyflow/react';
import { MarkerType } from '@xyflow/react';

export const nodes: Node[] = [
  {
    id: 'annotation-1',
    type: 'annotation',
    draggable: false,
    selectable: true,
    data: {
      level: 1,
      label:
        'You can define your own Flow by dragging and dropping nodes, connecting them and editing their properties.',
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: 'translate(-30px,10px) rotate(-80deg)',
      },
    },
    position: { x: -100, y: -30 },
  },
  {
    id: '1-1',
    type: 'default',
    data: {
      label: 'Startup',
    },
    position: { x: 150, y: 0 },
  },
  {
    id: '2-1',
    type: 'default',
    data: {
      label: 'Check My Balance',
    },
    position: { x: 0, y: 100 },
  },
  {
    id: '2-2',
    type: 'default',
    data: {
      label: 'Check My E-Commerce Data',
    },
    position: { x: 0, y: 200 },
  },
  {
    id: '2-3',
    type: 'default',
    data: {
      label: 'Check My Overall Financial Insights',
    },
    position: { x: 0, y: 300 },
  },
  {
    id: '3-1',
    type: 'default',
    data: {
      label: 'Check Realtime Exchange Rates',
    },
    position: { x: 300, y: 100 },
  },
  {
    id: '3-2',
    type: 'default',
    data: {
      label: 'Check Realtime Stock Prices',
    },
    position: { x: 300, y: 200 },
  },
  {
    id: 'annotation-2',
    type: 'annotation',
    draggable: false,
    selectable: true,
    data: {
      level: 2,
      label: 'Speed up your financial workflow by playing around now!',
      arrowStyle: {
        left: 0,
        bottom: 0,
        transform: 'translate(5px, 25px) scale(1, -1) rotate(100deg)',
      },
    },
    position: { x: 450, y: 200 },
  },
];

export const edges = [
  {
    id: 'e1-2',
    source: '1-1',
    target: '2-1',
    label: 'Check The Internal Data',
    type: 'custom',
    animated: true,
    className: 'edge',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e1-3',
    source: '1-1',
    target: '3-1',
    animated: true,
    label: 'Check The External Data',
    type: 'custom',
    className: 'edge',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e1-4',
    source: '2-1',
    target: '2-2',
    animated: true,
    type: 'custom',
    className: 'edge',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e1-5',
    source: '2-2',
    target: '2-3',
    animated: true,
    type: 'custom',
    className: 'edge',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e1-6',
    source: '3-1',
    target: '3-2',
    animated: true,
    type: 'custom',
    className: 'edge',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e1-7',
    source: '2-3',
    target: '3-1',
    animated: true,
    type: 'custom',
    label: 'Check The External Data',
    className: 'edge',
    markerEnd: { type: MarkerType.Arrow },
  },
];
