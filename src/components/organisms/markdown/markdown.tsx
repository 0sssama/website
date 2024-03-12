import MarkdownToJSX from 'markdown-to-jsx';
import clsx from 'clsx';

import { sanitizeMarkdown } from '@/base/utils/sanitize-markdown';

import type { MarkdownProps } from './markdown.types';

export default function Markdown({ className, content, ...props }: MarkdownProps) {
  const preparedMarkdown = sanitizeMarkdown(content) || '';

  if (!content) return null;

  return (
    <div
      className={clsx(
        'prose prose-zinc prose-invert lg:prose-base prose-code:rounded-xl prose-img:w-full prose-img:cursor-pointer prose-img:rounded-xl prose-img:object-cover',
        className,
      )}
    >
      <MarkdownToJSX {...props}>{preparedMarkdown}</MarkdownToJSX>
    </div>
  );
}
