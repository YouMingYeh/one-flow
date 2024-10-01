'use client';

import { setCookie } from 'cookies-next';
import * as React from 'react';
import type { FC } from 'react';

export const LanguageSetter: FC = () => {
  React.useEffect(() => {
    // get client side cookie
    if (typeof window !== 'undefined') {
      setCookie('lang', "zh");
    }
  }, []);

  return (
    <div/>
  );
};
