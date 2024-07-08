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

interface EditFlowButtonProps {
  flow: Flow;
}

export default function EditFlowButton({ flow }: EditFlowButtonProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(flow.name);
  const [description, setDescription] = useState(flow.description);
  const [icon, setIcon] = useState(flow.icon);

  const submit = async () => {
    setLoading(true);
    const supabase = createSupabaseClientClient();

    const newFlow = {
      name,
      description,
      icon,
    };

    await supabase.from('flow').update(newFlow).eq('id', flow.id);

    setLoading(false);
    toast({
      title: 'Flow updated successfully!',
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
      <DialogContent className='max-w-2xl items-center justify-center overflow-y-scroll'>
        <DialogHeader>
          <DialogTitle>Edit Flow</DialogTitle>
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
                      The name of the flow. This will be displayed on the flow
                      card.
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Input
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  placeholder='Flow Name'
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
                      A brief description of the flow. This will be displayed on
                      the flow card.
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Textarea
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                  placeholder='A brief description of the flow.'
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
                    Icon helps you to identify the flow easily. Pick an icon!
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
