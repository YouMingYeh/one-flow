'use client';

import * as React from 'react';
import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  // CommandShortcut,
  Icons,
} from 'ui';
import { useRouter } from 'next/navigation';
import createSupabaseClientClient from '../../../lib/supabase/client';

export function Command() {
  const [open, setOpen] = React.useState(false);
  const [workspaces, setWorkspaces] = React.useState<Workspace[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const supabase = createSupabaseClientClient();
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;
      if (!user) {
        router.push('/auth/login');
        return;
      }

      await supabase
        .from('workspace')
        .select()
        .eq('user_id', user.id)
        .then(({ data: workspace }) => {
          setWorkspaces(workspace as Workspace[]);
        });
    };

    void fetchData();
  }, [router]);

  return (
    <>
      <Button
        className='flex w-full justify-start gap-3'
        onClick={() => {
          setOpen(true);
        }}
        variant='outline'
      >
        <Icons.Search className='text-neutral-400' size={12} />
        <p className='text-muted-foreground text-sm'>
          Press{' '}
          <kbd className='bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100'>
            <span className='text-xs'>⌘</span>K
          </kbd>{' '}
          or{' '}
          <kbd className='bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100'>
            <span className='text-xs'>ctrl</span>K
          </kbd>
        </p>
      </Button>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem
              onSelect={() => {
                router.push('/app');
                setOpen(false);
              }}
            >
              <Icons.Home className='mr-2 h-4 w-4' />
              <span>✨ Guide me!</span>
            </CommandItem>
            {workspaces.map(workspace => (
              <CommandItem
                key={workspace.id}
                onSelect={() => {
                  router.push(`/app/workspace/${workspace.id}`);
                  setOpen(false);
                }}
              >
                <Icons.Folder className='mr-2 h-4 w-4' />
                <span>{workspace.name}</span>
              </CommandItem>
            ))}
            <CommandItem
              onSelect={() => {
                router.push('/app/workspace');
                setOpen(false);
              }}
            >
              <Icons.FolderKanban className='mr-2 h-4 w-4' />
              <span>Workspace</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push('/app/settings');
                setOpen(false);
              }}
            >
              <Icons.Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push('/app/recent');
                setOpen(false);
              }}
            >
              <Icons.Timer className='mr-2 h-4 w-4' />
              <span>Recent</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem
              onSelect={() => {
                router.push('/app/recent');
                setOpen(false);
              }}
            >
              <Icons.User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              {/* <CommandShortcut>⌘P</CommandShortcut> */}
            </CommandItem>
            <CommandItem>
              <Icons.CreditCard
                className='mr-2 h-4 w-4'
                onSelect={() => {
                  router.push('/app/settings/account');
                  setOpen(false);
                }}
              />
              <span>Account & Billing</span>
              {/* <CommandShortcut>⌘B</CommandShortcut> */}
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push('/app/settings/appearance');
                setOpen(false);
              }}
            >
              <Icons.Settings className='mr-2 h-4 w-4' />
              <span>Appearance</span>
              {/* <CommandShortcut>⌘S</CommandShortcut> */}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
