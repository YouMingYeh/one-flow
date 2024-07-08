'use client';

import type { Step } from 'onborda';
import { Onborda, OnbordaProvider } from 'onborda';
import { TooltipProvider } from 'ui';
import { CustomCard } from './app/(root)/CardComponent';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <OnbordaProvider>
        <Onborda
          cardComponent={CustomCard}
          shadowOpacity='0.8'
          shadowRgb='0, 0, 0'
          steps={steps}
        >
          {children}
        </Onborda>
      </OnbordaProvider>
    </TooltipProvider>
  );
}

const steps: Step[] = [
  // Example steps
  {
    icon: <>👋</>,
    title: 'Hi there! Welcome to OneFlow',
    content: (
      <>
        This is the Main Navigation. You can explore through the entire app
        using the navbar.
      </>
    ),
    selector: '#onborda-step1',
    side: 'bottom',
    showControls: true,
    pointerPadding: 10,
    pointerRadius: 24,
  },
  {
    icon: <>🪄</>,
    title: 'Here is the sidebar for you to work with the projects',
    content: (
      <>
        You can create, edit, and delete workspaces and projects in and{' '}
        <b>Workspaces</b> sections. Let&apos;s start by creating a new
        workspace.
      </>
    ),
    selector: '#onborda-step2',
    side: 'right',
    showControls: true,
    pointerPadding: 10,
    pointerRadius: 24,
    nextRoute: '/app/workspace',
  },
  {
    icon: <>⚒️</>,
    title: 'Create a new workspace (1/2)',
    content: <>Click on the &quot;+&quot; button to create a new workspace.</>,
    selector: '#onborda-step3',
    side: 'left',
    showControls: true,
    pointerPadding: 0,
    pointerRadius: 24,
    nextRoute: '/app/workspace/create',
  },
  {
    icon: <>⚒️</>,
    title: 'Create a new workspace (2/2)',
    content: (
      <>
        Enter the name and description of the workspace and click on the
        &quot;Create&quot; button. A workspace is a collection of projects, you
        can simply think of it as a folder. But Let&apos;s not worry about that
        now.
      </>
    ),
    selector: '#onborda-step4',
    side: 'bottom',
    showControls: true,
    pointerPadding: 20,
    pointerRadius: 24,
    prevRoute: '/app/workspace',
    nextRoute: '/app/settings',
  },
  {
    icon: <>😀</>,
    title: 'Configure your settings (1/3)',
    content: (
      <>
        You can configure your settings here. You can change your name, email,
        password, and billing information here.
      </>
    ),
    selector: '#onborda-step5',
    side: 'left',
    showControls: true,
    pointerPadding: 20,
    pointerRadius: 24,
    prevRoute: '/app/workspace/create',
    nextRoute: '/app/settings/appearance',
  },
  {
    icon: <>😀</>,
    title: 'Configure your settings (2/3)',
    content: (
      <>
        You can configure the appearance of the app here. You can change the
        theme, language, and other appearance settings here. Some settings may
        not be available now, but we will add them soon.
      </>
    ),
    selector: '#onborda-step5',
    side: 'left',
    showControls: true,
    pointerPadding: 20,
    pointerRadius: 24,
    prevRoute: '/app/workspace',
    nextRoute: '/app/settings/account',
  },
  {
    icon: <>😀</>,
    title: 'Configure your settings (3/3)',
    content: (
      <>
        You can configure the account here. You can change the email, reset the
        password, logout, or delete the account here. Some settings may not be
        available now, but we will add them soon.
      </>
    ),
    selector: '#onborda-step5',
    side: 'left',
    showControls: true,
    pointerPadding: 20,
    pointerRadius: 24,
    prevRoute: '/app/workspace/appearance',
    nextRoute: '/app',
  },
  {
    icon: <>💼</>,
    title: 'Congratulations! 🎉',
    content: (
      <>
        You have successfully completed the onboarding process. Now create a
        workspace and projects and start working on them. Or you can check out
        the cookbooks for some inspiration.
      </>
    ),
    selector: '#onborda-step3',
    side: 'left',
    showControls: true,
    pointerPadding: 20,
    pointerRadius: 24,
    prevRoute: '/app/settings/account',
  },
];
