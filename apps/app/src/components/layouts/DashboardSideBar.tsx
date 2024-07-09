'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC, ReactNode } from 'react';
import {
  Icons,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from 'ui';
import { Separator } from 'ui/src/components/ui/separator';
import { AppBreadcrumb } from './AppBreadcrumb';
// import { Command } from './Command';

interface DashboardSideBarProps {
  children?: ReactNode;
}

export const DashboardSideBar: FC<DashboardSideBarProps> = ({ children }) => {
  const pathname = usePathname();
  const active = pathname.split('/')[2];
  const breadcrumbs = pathname.split('/').slice(1);

  return (
    <ResizablePanelGroup
      className='max-w-screen h-full w-screen rounded-none border'
      direction='horizontal'
    >
      <ResizablePanel defaultSize={20} id='onborda-step2' maxSize={40}>
        <div className='flex w-full flex-col gap-2 p-4 font-thin'>
          {barItemsUp.map(item => (
            <div
              className={`flex items-center gap-2 rounded-lg p-2 transition-all duration-75 ${
                active === item.title.toLowerCase()
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
              key={item.title}
            >
              {item.content}
            </div>
          ))}
        </div>
        <div className='w-full p-2'>
          <Separator />
        </div>
        <div className='flex w-full flex-col gap-2 p-4'>
          {barItemDown.map(item => (
            <div
              className={`flex items-center gap-2 rounded-lg p-2 ${
                active === item.title.toLowerCase()
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
              key={item.title}
            >
              {item.content}
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80} id='onborda-step3'>
        <div className='h-[90vh] overflow-y-scroll p-4'>
          <AppBreadcrumb items={breadcrumbs} />
          {children}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

const barItemsUp = [
  {
    title: 'recent',
    content: (
      <Link
        className='flex h-6 w-full items-center gap-1 p-2'
        href='/app/recent'
      >
        <Icons.Timer />
        Recent
      </Link>
    ),
  },
  {
    title: 'workspace',
    content: (
      <Link
        className='flex h-6 w-full items-center gap-1 p-2'
        href='/app/workspace'
      >
        <Icons.Computer />
        Workspace
      </Link>
    ),
  },
  {
    title: 'cookbooks',
    content: (
      <Link
        className='flex h-6 w-full items-center gap-1 p-2'
        href='/app/cookbooks'
      >
        <Icons.BookCopyIcon />
        Cookbooks
      </Link>
    ),
  },
];

const barItemDown = [
  {
    title: 'settings',
    content: (
      <Link
        className='flex h-6 w-full items-center gap-1 p-2'
        href='/app/settings'
      >
        <Icons.Settings />
        Settings
      </Link>
    ),
  },
  {
    title: 'billing',
    content: (
      <Link
        className='flex h-6 w-full items-center gap-1 p-2'
        href='/app/billing?plan=pro'
      >
        <Icons.Receipt />
        Billing
      </Link>
    ),
  },
];
