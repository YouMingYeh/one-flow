'use client';

import { useRouter } from 'next/navigation';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
  Icons,
  // Skeleton,
  nameToIcon,
} from 'ui';

interface WorkspaceCardsProps extends React.HTMLAttributes<HTMLElement> {
  workspaces: Workspace[];
}

export function WorkspaceCards({ workspaces = [] }: WorkspaceCardsProps) {
  const router = useRouter();
  if (workspaces.length === 0) {
    return (
      <div className='grid grid-cols-1 gap-4 p-4 opacity-75 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Button
          className='flex h-48 w-full flex-col items-center justify-center rounded-xl opacity-75 transition-all hover:scale-105 hover:cursor-pointer'
          onClick={() => {
            router.push('/app/workspace/create');
          }}
          variant='outline'
        >
          <Icons.Plus className='bottom-16 h-8 w-8 self-center' />
          Create a new workspace
        </Button>
      </div>
    );
  }

  return (
    <div className='grid h-[60vh] grid-cols-1 gap-4 overflow-y-scroll p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <Button
        className='h-48 w-full rounded-xl opacity-75 transition-all hover:scale-105 hover:cursor-pointer'
        onClick={() => {
          router.push('/app/workspace/create');
        }}
        variant='outline'
      >
        <Icons.Plus className='bottom-16 h-8 w-8 self-center' />
      </Button>
      {workspaces.map(workspace => (
        <Card
          className='h-48 w-full overflow-hidden transition-all hover:scale-105 hover:cursor-pointer'
          key={workspace.id}
          onClick={() => {
            router.push(`/app/workspace/${workspace.id}`);
          }}
        >
          <CardHeader>
            {/* <Skeleton className='h-32 rounded-xl' /> */}
            {nameToIcon(workspace.icon)}
          </CardHeader>
          <CardContent>
            <CardTitle>{workspace.name}</CardTitle>
            <CardDescription>{workspace.description}</CardDescription>
          </CardContent>
          {/* <CardFooter>{workspace.id}</CardFooter> */}
        </Card>
      ))}
    </div>
  );
}
