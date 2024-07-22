"use client"
import type { FC } from 'react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icons,
} from 'ui';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from '../../../app/app/actions/user';

export const ProfileIconMenu: FC = () => {
  const { push } = useRouter();

  const onLogout = async () => {
    await signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='ghost'>
          <Icons.AlignJustify className='h-6 w-6' />
          <span className='sr-only'>Profile menu toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              push('/home');
            }}
          >
            Home
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              push('/app');
            }}
          >
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              push('/app/settings');
            }}
          >
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              push('/app/billing');
            }}
          >
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
