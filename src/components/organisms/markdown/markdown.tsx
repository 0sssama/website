import MarkdownToJSX from 'markdown-to-jsx';
import clsx from 'clsx';

import { sanitizeMarkdown } from '@/base/utils/sanitize-markdown';

import type { MarkdownProps } from './markdown.types';

export default function Markdown({ className, content, ...props }: MarkdownProps) {
  const preparedMarkdown = sanitizeMarkdown(content || props.children) || '';

  if (!content && !props.children) return null;

  return (
    <div className={clsx('prose lg:prose-xl dark:prose-invert', className)}>
      <MarkdownToJSX {...props}>{preparedMarkdown}</MarkdownToJSX>
    </div>
  );
}
