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

interface FlowCardsProps extends React.HTMLAttributes<HTMLElement> {
  workspaceId: string;
  flows: Flow[];
}

export function FlowCards({ workspaceId, flows = [] }: FlowCardsProps) {
  const router = useRouter();
  if (flows.length === 0) {
    return (
      <div className='grid grid-cols-1 gap-4 p-4 opacity-75 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Button
          className='flex h-48 w-full flex-col items-center justify-center rounded-xl opacity-75 transition-all hover:scale-105 hover:cursor-pointer'
          onClick={() => {
            router.push(`/app/workspace/${workspaceId}/flow/create`);
          }}
          variant='outline'
        >
          <Icons.Plus className='bottom-16 h-8 w-8 self-center' />
          Create a new flow
        </Button>
      </div>
    );
  }

  return (
    <div className='grid h-[60vh] grid-cols-1 gap-4 overflow-y-scroll p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <Button
        className='h-48 w-full rounded-xl opacity-75 transition-all hover:scale-105 hover:cursor-pointer'
        onClick={() => {
          router.push(`/app/workspace/${workspaceId}/flow/create`);
        }}
        variant='outline'
      >
        <Icons.Plus className='bottom-16 h-8 w-8 self-center' />
      </Button>

      {flows.map(flow => (
        <Card
          className='h-48 w-full overflow-hidden transition-all hover:scale-105 hover:cursor-pointer'
          key={flow.id}
          onClick={() => {
            router.push(`/app/workspace/${workspaceId}/flow/${flow.id}`);
          }}
        >
          <CardHeader>
            {/* <Skeleton className='h-32 rounded-xl' /> */}
            {nameToIcon(flow.icon)}
          </CardHeader>
          <CardContent>
            <CardTitle>{flow.name}</CardTitle>
            <CardDescription>{flow.description}</CardDescription>
          </CardContent>
          {/* <CardFooter>{flow.id}</CardFooter> */}
        </Card>
      ))}
    </div>
  );
}
