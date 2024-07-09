'use client';
import { motion } from 'framer-motion';
import { Button, cn, Icons } from 'ui';
import type { Node } from '@xyflow/react';
import NodeAutoForm from './NodeAutoForm';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  nodeConfig: Node;
  setNodeConfig: (nodeConfig: Node) => void;
}
const Sidebar = ({
  open,
  setOpen,
  nodeConfig,
  setNodeConfig,
}: SidebarProps) => {
  return (
    <motion.div
      className={cn(
        'bg-background absolute right-0 top-0 z-10 flex h-full w-[15vw] flex-col gap-2 overflow-y-scroll rounded border p-2 shadow',
        open ? 'flex' : 'hidden',
      )}
    >
      <Button
        className='absolute right-2 top-2'
        onClick={() => {
          setOpen(false);
        }}
        size='icon'
        variant='ghost'
      >
        <Icons.close />
      </Button>
      <h2 className='text-lg font-semibold'>{nodeConfig.id}</h2>
      <NodeAutoForm nodeConfig={nodeConfig} setNodeConfig={setNodeConfig} />
    </motion.div>
  );
};

export default Sidebar;
