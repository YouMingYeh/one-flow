"use client"
import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icons,
} from 'ui';

const LearnMoreDialogButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button>
          了解更多 <Icons.ChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>了解更多</DialogTitle>
          <DialogDescription>
            请订阅我们的月度计划，以查看下方更多信息及分析结果，包括但不限定于优缺点分析，用户测评，额外服务等
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreDialogButton;
