'use client';

import type { FC, ReactNode } from 'react';
import { Icons } from 'ui';
// import { ProfileIconMenu } from '../../modules/user/components/ProfileIconMenu';
import { ProfileIconMenu } from '../../modules/user/components/ProfileIconMenu';
import { AppNavigationMenu } from './AppNavigationMenu';
import { Command } from './Command';

interface AppNavbarProps {
  children?: ReactNode;
}

export const AppNavBar: FC<AppNavbarProps> = () => {
  return (
    <nav className='py-2 text-black dark:text-white md:py-3'>
      <div className='mx-auto flex max-w-6xl items-center justify-between'>
        <a className='z-50' href='/app'>
          <Icons.logo />
        </a>

        {/* <div className='gap-3 hidden md:flex'>
          <a href='/home'>Home</a>
          <a href='/app'>App</a>
          <a href='/app/settings'>Settings</a>
        </div> */}
        <AppNavigationMenu />

        <div className='z-50 flex items-center space-x-6'>
          <Command />
          <ProfileIconMenu />
        </div>
      </div>
    </nav>
  );
};
