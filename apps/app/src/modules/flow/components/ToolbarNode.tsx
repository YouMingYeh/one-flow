'use client';
import { memo, useState } from 'react';
import { Handle, Position, NodeToolbar } from '@xyflow/react';

interface ToolbarNodeProps {
  data: {
    label: string;
  };
}

function ToolbarNode({ data }: ToolbarNodeProps) {
  const [emoji, setEmoji] = useState(() => '🚀');

  return (
    <>
      <NodeToolbar isVisible>
        <button
          onClick={() => {
            setEmoji('🚀');
          }}
        >
          🚀
        </button>
        <button
          onClick={() => {
            setEmoji('🔥');
          }}
        >
          🔥
        </button>
        <button
          onClick={() => {
            setEmoji('✨');
          }}
        >
          ✨
        </button>
      </NodeToolbar>
      <div style={{ padding: '10px 20px' }}>
        <div>{emoji}</div>
      </div>
      <Handle position={Position.Left} type='target' />
      <Handle position={Position.Right} type='source' />

      <div
        style={{
          position: 'absolute',
          color: '#555',
          bottom: -15,
          fontSize: 8,
        }}
      >
        {data.label}
      </div>
    </>
  );
}

export default memo(ToolbarNode);
