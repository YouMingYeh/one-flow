'use client';
import { memo } from 'react';

interface AnnotationNodeProps {
  data: {
    level: number;
    label: string;
    arrowStyle?: React.CSSProperties;
  };
}

function AnnotationNode({ data }: { data: AnnotationNodeProps['data'] }) {
  return (
    <>
      <div style={{ padding: 10, display: 'flex' }}>
        <div style={{ marginRight: 4 }}>{data.level}.</div>
        <div>{data.label}</div>
      </div>
      {data.arrowStyle ? (
        <div className='arrow' style={data.arrowStyle}>
          ⤹
        </div>
      ) : null}
    </>
  );
}

export default memo(AnnotationNode);
