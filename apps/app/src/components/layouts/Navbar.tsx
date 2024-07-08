'use client';

import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Button, buttonVariants, cn, Icons } from 'ui';
import { useRouter } from 'next/navigation';
import { ProfileIconMenu } from '../../modules/user/components/ProfileIconMenu';

interface NavbarProps {
  userExists?: boolean;
  children?: ReactNode;
}

export const NavBar: FC<NavbarProps> = ({ userExists }) => {
  const { push } = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onLoginClick = () => {
    push('/auth/login');
  };

  return (
    <nav className='py-4 text-black dark:text-white md:py-6'>
      <div className='mx-auto flex max-w-6xl items-center justify-between'>
        <a href='/'>
          <Icons.logo />
        </a>
        {userExists ? (
          <div className='hidden items-center space-x-6 md:flex'>
            <ProfileIconMenu />
          </div>
        ) : (
          <div className='hidden items-center space-x-6 md:flex'>
            <Button
              className={cn(buttonVariants({ size: 'sm' }), 'px-4')}
              onClick={onLoginClick}
            >
              Login
            </Button>
          </div>
        )}

        <button className='md:hidden' onClick={toggleMobileMenu}>
          <span>{!isMobileMenuOpen && <Icons.Menu />}</span>
        </button>

        <div
          className={`fixed inset-0 z-50 transform bg-opacity-30 p-8 backdrop-blur-lg backdrop-filter transition duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className='absolute right-4 top-4 text-3xl text-gray-600 dark:text-gray-300'
            onClick={toggleMobileMenu}
          >
            <Icons.close />
          </button>

          <div className='flex h-full flex-col justify-between'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-y-2 text-center'>
                <Icons.logo className='mx-auto h-6 w-6' />
                <h2 className='text-xl font-semibold tracking-tight'>Portal</h2>
                <p className='text-muted-foreground text-sm'>
                  Please sign in to access exclusive features and content.
                </p>
              </div>
            </div>
            <Button
              className={cn(buttonVariants({ size: 'sm' }), 'px-4')}
              onClick={onLoginClick}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
