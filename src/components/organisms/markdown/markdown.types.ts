import type MarkdownToJSX from 'markdown-to-jsx';
import type { ComponentProps } from 'react';

export interface MarkdownProps extends ComponentProps<typeof MarkdownToJSX> {
  content?: string;
  className?: string;
}
