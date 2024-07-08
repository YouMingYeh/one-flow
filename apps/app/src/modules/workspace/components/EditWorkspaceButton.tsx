'use client';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icons,
  Input,
  Label,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useToast,
} from 'ui';
import { useState } from 'react';
import createSupabaseClientClient from '../../../../lib/supabase/client';
import IconSelector from './IconSelector';

interface EditWorkspaceButtonProps {
  workspace: Workspace;
}

export default function EditWorkspaceButton({
  workspace,
}: EditWorkspaceButtonProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(workspace.name);
  const [description, setDescription] = useState(workspace.description);
  const [icon, setIcon] = useState(workspace.icon);

  const submit = async () => {
    // Update the workspace
    setLoading(true);
    const supabase = createSupabaseClientClient();

    const newWorkspace = {
      name,
      description,
      icon,
    };

    await supabase
      .from('workspace')
      .update(newWorkspace)
      .eq('id', workspace.id);

    setLoading(false);
    toast({
      title: 'Workspace updated successfully!',
    });

    window.location.reload();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='' size='sm'>
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Workspace</DialogTitle>
          <DialogDescription>
            <div className='flex w-full flex-col gap-4 p-1 lg:max-w-xl'>
              <div>
                <Label className='mb-1 flex items-center gap-1 align-middle'>
                  Name{' '}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Icons.HelpCircle
                        className='hover:cursor-pointer'
                        size={16}
                      />
                    </TooltipTrigger>
                    <TooltipContent className='flex max-w-md flex-wrap'>
                      The name of the workspace. This will be displayed on the
                      workspace card.
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Input
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  placeholder='Workspace Name, e.g. My Podcast Series'
                  required
                  value={name}
                />
              </div>
              <div>
                <Label className='mb-1 flex items-center gap-1 align-middle'>
                  Description{' '}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Icons.HelpCircle
                        className='hover:cursor-pointer'
                        size={16}
                      />
                    </TooltipTrigger>
                    <TooltipContent className='flex max-w-md flex-wrap'>
                      A brief description of the workspace. This will be
                      displayed on the workspace card.
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Textarea
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                  placeholder='A brief description of the workspace, e.g. My podcast series about the future of technology.'
                  value={description}
                />
              </div>
              <Label className='mb-1 flex items-center gap-1 align-middle'>
                Icon{' '}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Icons.HelpCircle
                      className='hover:cursor-pointer'
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent className='flex max-w-md flex-wrap'>
                    Icon helps you to identify the workspace easily. Pick an
                    icon!
                  </TooltipContent>
                </Tooltip>
              </Label>
              <IconSelector
                onValueChange={(value: string) => {
                  setIcon(value);
                }}
                value={icon}
              />

              <Button onClick={submit}>{loading ? 'Saving...' : 'Save'}</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
