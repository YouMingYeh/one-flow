'use client';
import React, { memo } from 'react';
import { Handle, useStore, Position } from '@xyflow/react';

interface CircleNodeProps {
  id: string;
}

const CircleNode = ({ id }: CircleNodeProps) => {
  const label = useStore(s => {
    const node = s.nodeLookup.get(id);

    if (!node) {
      return null;
    }

    return `position x:${node.position.x} y:${node.position.y}`;
  });

  return (
    <>
      <div className='wrapper gradient'>
        <div className='inner'>{label || 'no node connected'}</div>
      </div>
      <Handle position={Position.Left} type='target' />
    </>
  );
};

export default memo(CircleNode);
