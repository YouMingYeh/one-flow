'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
  Icons,
  Input,
  // Skeleton,
  nameToIcon,
} from 'ui';

interface RecentCardsProps extends React.HTMLAttributes<HTMLElement> {
  activities: Activity[];
}

export function RecentCards({ activities = [] }: RecentCardsProps) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  if (activities.length === 0) {
    return (
      <div className='flex flex-col'>
        Oops! You have no recent activities. Go to workspace and create a new
        flow.
        <Button
          className='mt-4'
          onClick={() => {
            router.push('/app/workspace');
          }}
        >
          Go to workspace <Icons.ChevronRight />
        </Button>
      </div>
    );
  }

  const filteredActivities = activities.filter(activity => {
    const searchValue = search.toLowerCase();
    const flowName = activity.flow.name.toLowerCase();
    const workspaceName = activity.workspace.name.toLowerCase();
    return (
      flowName.includes(searchValue) || workspaceName.includes(searchValue)
    );
  });

  return (
    <div className='flex h-[60vh] flex-col gap-3 overflow-y-scroll p-2'>
      <div className='flex max-w-lg items-center gap-1'>
        <Input
          className='h-8 p-2'
          onChange={e => {
            setSearch(e.target.value);
          }}
          placeholder=' Search...'
          value={search}
        />
        <Icons.Search />
      </div>
      {filteredActivities.map(activity => (
        <Card
          className='relative w-full transition-all hover:cursor-pointer'
          key={activity.flow.id}
          onClick={() => {
            router.push(
              `/app/workspace/${activity.workspace.id}/flow/${activity.flow.id}`,
            );
          }}
        >
          <CardHeader>{nameToIcon(activity.flow.icon)}</CardHeader>
          <CardContent>
            <CardTitle>
              {activity.workspace.name} - {activity.flow.name}
            </CardTitle>
            <CardDescription>{activity.flow.description}</CardDescription>
          </CardContent>
          <Button
            className='absolute bottom-4 right-4'
            onClick={() => {
              router.push(
                `/app/workspace/${activity.workspace.id}/flow/${activity.flow.id}`,
              );
            }}
          >
            <Icons.ChevronRight />
          </Button>
        </Card>
      ))}
    </div>
  );
}
