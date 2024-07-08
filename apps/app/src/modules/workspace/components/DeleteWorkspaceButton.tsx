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
import { deleteWorkspace } from '../actions';
import SubmitButton from './submitButton';

interface DeleteWorkspaceButtonProps extends React.HTMLAttributes<HTMLElement> {
  workspaceId: string;
}

export default function DeleteWorkspaceButton({
  workspaceId,
}: DeleteWorkspaceButtonProps) {
  const submit = async () => {
    'use server';
    await deleteWorkspace(workspaceId);
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
          <DialogTitle>Are you sure to delete this workspace?</DialogTitle>
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
