import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import 'ui/styles/globals.css';
import React from 'react';
import { Toaster } from 'ui';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '../components/layouts/ThemeProvider';
import Providers from './providers';

const inter = Merriweather({ weight: ['400', '700'], subsets: ['latin'] });

// TODO: update the site metadata
export const metadata: Metadata = {
  title: 'OneFlow | Your One-stop Automated Financial Workflow.',
  description:
    'OneFlow is your one-stop automated financial workflow. It helps you manage and optimize your financial processes, and find your best financial solutions. From accepting payments to processing transactions, all in one place.',
  keywords: [
    'OneFlow',
    'Financial Workflow',
    'Automated Financial Workflow',
    'Financial Management',
    'Financial Processes',
    'Financial Transactions',
    'Financial Automation',
    'Financial Services',
    'Financial Technology',
    'Fintech',
    'Financial Software',
  ],
  openGraph: {
    title: 'OneFlow | Your One-stop Automated Financial Workflow.',
    description:
      'OneFlow is your one-stop automated financial workflow. It helps you manage and optimize your financial processes, and find your best financial solutions. From accepting payments to processing transactions, all in one place.',
    type: 'website',
    siteName: 'OneFlow',
    images: [
      {
        url: 'https://oneflow.co/icon512_rounded.png',
        width: 1200,
        height: 630,
        alt: 'OneFlow | Your One-stop Automated Financial Workflow.',
      },
    ],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  applicationName: 'OneFlow',
  appleWebApp: true,
  metadataBase: new URL('https://oneflow.co'),
};

// TODO: Add global providers over here
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <link href='/manifest.json' rel='manifest' />
    <body className={inter.className}>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        disableTransitionOnChange
        enableSystem
        storageKey='theme'
      >
        <Providers>{children}</Providers>
        <Toaster />
      </ThemeProvider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
