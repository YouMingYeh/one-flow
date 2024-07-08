'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Icons,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  cn,
  navigationMenuTriggerStyle,
} from 'ui';

export function AppNavigationMenu() {
  return (
    <NavigationMenu className='hidden md:block' id='onborda-step1'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/home' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    <Icons.logo className='h-6 w-6' />
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      Welcome to OneFlow 🚀
                    </div>
                    <p className='text-muted-foreground text-sm leading-tight'>
                      OneFlow helps you automate and optimize your financial
                      workflows.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/app/workspace' title='Start with a new project'>
                Checkout the workspace to start a new project.
              </ListItem>
              <ListItem href='/app/settings' title='Settings'>
                Set up your account, preferences, and more.
              </ListItem>
              <ListItem title='Quick Actions'>
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
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/pricing' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className,
          )}
          ref={ref}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
