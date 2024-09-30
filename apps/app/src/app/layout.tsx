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
  title: 'OneFlow | 一站式跨境收款整合方案。',
  description:
    'OneFlow 致力于为跨境电商卖家解决跨境收款提现端遇到的各种痛点。那么久了！您受够了吗？数不清的收款渠道、模糊不清的阶梯式收费、时有时无的优惠活动，通过 OneFlow 收款小助手，我们会根据您的业务情况、特点、偏好，推荐最适合您的收款网关，更可提供定制化的财资解决方案。通过我们强大的 APIs 及算法，为众多商户提供极致的收款体验。',
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
    '金融技术',
    '金融解决方案',
    '金融系统',
    '金融平台',
  ],
  openGraph: {
    title: 'OneFlow | 一站式跨境收款整合方案。',
    description:
      'OneFlow 致力于为跨境电商卖家解决跨境收款提现端遇到的各种痛点。那么久了！您受够了吗？数不清的收款渠道、模糊不清的阶梯式收费、时有时无的优惠活动，通过 OneFlow 收款小助手，我们会根据您的业务情况、特点、偏好，推荐最适合您的收款网关，更可提供定制化的财资解决方案。通过我们强大的 APIs 及算法，为众多商户提供极致的收款体验。',
    type: 'website',
    siteName: 'OneFlow',
    images: [
      {
        url: 'https://one-flow.cn/icon512_rounded.png',
        width: 1200,
        height: 630,
        alt: 'OneFlow | 一站式跨境收款整合方案。',
      },
    ],
  },
  // manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
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
