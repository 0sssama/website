/* eslint-disable jsx-a11y/alt-text */
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Header } from '@/components/layouts/header';
import { calSansFont, dmSansFont } from '@/base/config/fonts.config';
import { StoryblokProvider } from '@/base/providers';
import noise from '@/assets/images/noise.webp';
import { Image } from '@/components/atoms/image';
import { cn } from '@/base/utils/cn';

import { Footer } from '../footer';

import type { GlobalLayoutProps } from './global-layout.types';

export default async function GlobalLayout({ children, header, footer }: GlobalLayoutProps) {
  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(dmSansFont.variable, calSansFont.variable)}>
          {/* very unnecessary filter but it makes the website look less boring imo :) */}
          <Image
            image={{
              filename: noise.src,
              alt: 'Noise',
            }}
            fill
            priority
            className="pointer-events-none !fixed !left-0 top-0 z-[-1] !h-screen !w-screen object-cover opacity-50"
          />
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
