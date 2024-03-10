import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Header } from '@/components/layouts/header';
import { calSansFont, dmSansFont } from '@/base/config/fonts.config';
import { StoryblokProvider } from '@/base/providers';

import { Footer } from '../footer';

import type { GlobalLayoutProps } from './global-layout.types';

export default async function GlobalLayout({ children, header, footer }: GlobalLayoutProps) {
  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={clsx(dmSansFont.variable, calSansFont.variable)}>
          {header && <Header {...header} />}
          {children}
          {footer && <Footer {...footer} />}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </StoryblokProvider>
  );
}
