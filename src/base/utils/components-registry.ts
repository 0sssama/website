import dynamic from 'next/dynamic';
import type { ComponentType as ReactComponentType } from 'react';

import type { MarkdownProps } from '@/components/organisms/markdown';
import type { HeroProps } from '@/components/sections/hero';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentsRegistry: Record<string, ReactComponentType<any>> = {
  // ORGANISMS
  markdown: dynamic(() => import('@/components/organisms/markdown/markdown')),

  // SECTIONS
  hero: dynamic(() => import('@/components/sections/hero/hero')),
};

export type ComponentType = keyof typeof componentsRegistry;

export type ComponentProps = MarkdownProps & HeroProps;
