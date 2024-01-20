import clsx from 'clsx';

import { calSansFont } from '@/base/config/fonts.config';

import type { GlobalLayoutProps } from './global-layout.types';

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx('overflow-x-hidden bg-zinc-900 text-zinc-50 *:scroll-smooth', calSansFont.className)}>
        {children}
      </body>
    </html>
  );
}
