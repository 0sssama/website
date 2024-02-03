import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/components/layouts/header';
import { calSansFont, dmSansFont } from '@/base/config/fonts.config';
import { StoryblokProvider } from '@/base/providers';

import type { GlobalLayoutProps } from './global-layout.types';

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={clsx(dmSansFont.variable, calSansFont.variable)}>
          <Header />
          {children}
          <Analytics />
        </body>
      </html>
    </StoryblokProvider>
  );
}
