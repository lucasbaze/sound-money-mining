import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import { GoogleTagManagerNoScript, GoogleTagManagerScript } from '../lib/google-tag-manager';
import { getPublicConfig } from '../application.config';
import { Suspense } from 'react';

const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sound Money Mining',
    template: '%s | Sound Money Mining',
  },
  description: 'Bitcoin mining venture to bring sound money back to the world.',
  openGraph: {
    title: 'Sound Money Mining',

    description: 'Bitcoin mining venture to bring sound money back to the world.',
    url: 'https://soundmoneymining.com',
    siteName: 'Sound Money Mining',
    images: [
      {
        url: 'https://soundmoneymining.com/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Sound Money Mining',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

const publicConfig = getPublicConfig();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx('text-black bg-white dark:text-white dark:bg-[#111010]', kaisei.variable)}>
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-28 lg:mx-auto">
        <Suspense>
          <GoogleTagManagerScript
            tagManagerId={publicConfig.google.tagManagerId}
            auth={publicConfig.google.auth}
            preview={publicConfig.google.preview}
            nodeEnv={publicConfig.root.nodeEnv}
          />
          <GoogleTagManagerNoScript
            tagManagerId={publicConfig.google.tagManagerId}
            auth={publicConfig.google.auth}
            preview={publicConfig.google.preview}
            nodeEnv={publicConfig.root.nodeEnv}
          />
        </Suspense>
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">{children}</main>
      </body>
    </html>
  );
}
