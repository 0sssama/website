import dynamic from 'next/dynamic';
import type { ComponentType as ReactComponentType } from 'react';

import type { MarkdownProps } from '@/components/organisms/markdown';

const Markdown = dynamic(() => import('@/components/organisms/markdown/markdown'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentsRegistry: Record<string, ReactComponentType<any>> = {
  markdown: Markdown,
};

export type ComponentType = keyof typeof componentsRegistry;

export type ComponentProps = MarkdownProps;
