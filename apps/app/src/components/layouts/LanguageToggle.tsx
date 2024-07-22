'use client';

import * as React from 'react';
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
import { getCookie, setCookie } from 'cookies-next';
import { defaultLanguage } from '../../app/i18n';

export const LanguageToggle: FC = () => {
  const searchParams = useSearchParams();

  const [lang, setLang] = React.useState(searchParams.get('lang') ?? defaultLanguage);
  const handleLanguageChange = (language: string) => {
    setLang(language);
    setCookie('lang', language);
    window.location.reload();
  };
  React.useEffect(() => {
    // get client side cookie
    const language = getCookie('lang');
    if (language) {
      setLang(language);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='outline'>
          <Icons.Languages className='h-[1.2rem] w-[1.2rem]' />
          <span className='sr-only'>{lang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => {
            handleLanguageChange('en');
          }}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleLanguageChange('zh');
          }}
        >
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
