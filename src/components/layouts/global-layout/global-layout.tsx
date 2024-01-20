import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/components/layouts/header';
import { calSansFont, satoshiFont } from '@/base/config/fonts.config';

import type { GlobalLayoutProps } from './global-layout.types';

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(calSansFont.className, satoshiFont.className)}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
