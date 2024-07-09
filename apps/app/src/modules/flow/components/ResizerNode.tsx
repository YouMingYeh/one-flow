'use client';
import { memo } from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';

interface ResizerNodeProps {
  data: {
    label: string;
  };
}

function ResizerNode({ data }: ResizerNodeProps) {
  return (
    <>
      <NodeResizer minHeight={50} minWidth={50} />
      <Handle position={Position.Left} type='target' />
      <div style={{ padding: 10 }}>{data.label}</div>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-evenly',
          left: 0,
        }}
      >
        <Handle
          id='a'
          position={Position.Bottom}
          style={{ position: 'relative', left: 0, transform: 'none' }}
          type='source'
        />
        <Handle
          id='b'
          position={Position.Bottom}
          style={{ position: 'relative', left: 0, transform: 'none' }}
          type='source'
        />
      </div>
    </>
  );
}

export default memo(ResizerNode);
