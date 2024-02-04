import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Header } from '@/components/layouts/header';
import { calSansFont, dmSansFont } from '@/base/config/fonts.config';
import { NprogressProvider, StoryblokProvider } from '@/base/providers';
import { getPageBySlug } from '@/base/services/storyblok';

import type { GlobalLayoutProps } from './global-layout.types';

export default async function GlobalLayout({ children }: GlobalLayoutProps) {
  const layout = await getPageBySlug('layout');

  const header = layout?.header?.[0];

  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={clsx(dmSansFont.variable, calSansFont.variable)}>
          {header && <Header {...header} />}
          <NprogressProvider>{children}</NprogressProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </StoryblokProvider>
  );
}
