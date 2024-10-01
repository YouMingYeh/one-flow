'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icons,
} from 'ui';
import { useSearchParams } from 'next/navigation';
import { defaultLanguage, getDictionary } from '../../app/i18n';

export const ThemeToggle: FC = () => {
  const { setTheme } = useTheme();
  const searchParams = useSearchParams();
  const dictionaries = getDictionary(
    searchParams.get('lang') ?? defaultLanguage,
  );

  React.useEffect(() => {
    setTheme('light');
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='bg-background' size='icon' variant='outline'>
          <Icons.Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Icons.Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>{dictionaries.themeToggle.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => {
            setTheme('light');
          }}
        >
          {dictionaries.themeToggle.light}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('dark');
          }}
        >
          {dictionaries.themeToggle.dark}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('system');
          }}
        >
          {dictionaries.themeToggle.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
