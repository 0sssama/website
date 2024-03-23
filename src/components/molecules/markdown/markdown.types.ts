import type MarkdownToJSX from 'markdown-to-jsx';
import type { ComponentProps } from 'react';

export interface MarkdownProps extends Omit<ComponentProps<typeof MarkdownToJSX>, 'children'> {
  content?: string;
  className?: string;
}
