import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Header } from '@/components/layouts/header';
import { dmSansFont, geistSansFont } from '@/base/config/fonts.config';
import { StoryblokProvider } from '@/components/providers';
import { Toaster } from '@/components/elements/toaster';
import { cn } from '@/utils/cn';

import { Footer } from '../footer';

import type { GlobalLayoutProps } from './global-layout.types';

export default function GlobalLayout({ children, header, footer }: GlobalLayoutProps) {
  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(dmSansFont.variable, geistSansFont.variable)}>
          {header && <Header {...header} />}
          {children}
          {footer && <Footer {...footer} />}
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </body>
      </html>
    </StoryblokProvider>
  );
}
