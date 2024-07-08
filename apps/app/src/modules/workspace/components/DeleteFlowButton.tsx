import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'ui';
import { redirect } from 'next/navigation';
import { deleteFlow } from '../actions';
import SubmitButton from './submitButton';

interface DeleteFlowButtonProps extends React.HTMLAttributes<HTMLElement> {
  flowId: string;
}

export default function DeleteFlowButton({ flowId }: DeleteFlowButtonProps) {
  const submit = async () => {
    'use server';
    await deleteFlow(flowId);
    redirect('/app/workspace');
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='' size='sm' variant='outline'>
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to delete this flow?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <form action={submit} className='flex justify-center gap-2'>
          <DialogClose asChild>
            <Button type='button' variant='outline'>
              Cancel
            </Button>
          </DialogClose>
          <SubmitButton variant='destructive'>Delete</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
