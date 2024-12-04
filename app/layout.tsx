import Header from '@/src/widgets/layouComponents/Header/Header';
import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Footer from '@/src/widgets/layouComponents/Footer/Footer';
import clsx from 'clsx';
import Provider from './providers/Provider';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Euro corp web site',
  description: 'We are a company',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Euro corp web site</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='We are a company' />
        <link rel='icon' href='@/../../icons-frontend/icon.ico' />
      </head>
      <body
        className={clsx(
          inter.className,
          'bg-[#0A0B09]',
          'flex',
          'flex-col',
          'w-full',
          'custom-gradient',
        )}
      >
        <Header />
        <div className='mb-auto'>
          <Provider>{children}</Provider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
