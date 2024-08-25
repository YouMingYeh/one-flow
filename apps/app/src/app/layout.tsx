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
  title: 'OneFlow | 您的一站式自动化金融工作流程。',
  description:
    'OneFlow 是您的一站式自动化金融工作流程。它帮助您管理和优化金融流程，找到最佳的金融解决方案。从接受付款到处理交易，一切都在一个地方完成。',
  keywords: [
    'OneFlow',
    '金融工作流程',
    '自动化金融工作流程',
    '金融管理',
    '金融流程',
    '金融交易',
    '金融自动化',
    '金融服务',
    '金融科技',
    '金融软件',
  ],
  openGraph: {
    title: 'OneFlow | 您的一站式自动化金融工作流程。',
    description:
      'OneFlow 是您的一站式自动化金融工作流程。它帮助您管理和优化金融流程，找到最佳的金融解决方案。从接受付款到处理交易，一切都在一个地方完成。',
    type: 'website',
    siteName: 'OneFlow',
    images: [
      {
        url: 'https://one-flow.cn/icon512_rounded.png',
        width: 1200,
        height: 630,
        alt: 'OneFlow | 您的一站式自动化金融工作流程。',
      },
    ],
  },
  // manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  applicationName: 'OneFlow',
  appleWebApp: true,
  metadataBase: new URL('https://one-flow.cn'),
};

// TODO: Add global providers over here
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='zh' suppressHydrationWarning>
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
