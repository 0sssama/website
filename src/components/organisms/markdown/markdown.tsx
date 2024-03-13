import MarkdownToJSX from 'markdown-to-jsx';
import clsx from 'clsx';

import { sanitizeMarkdown } from '@/base/utils/sanitize-markdown';

import Code from './components/code';
import type { MarkdownProps } from './markdown.types';

export default function Markdown({ className, content, ...props }: MarkdownProps) {
  const preparedMarkdown = sanitizeMarkdown(content) || '';

  if (!content) return null;

  return (
    <div
      className={clsx(
        'prose prose-zinc prose-invert lg:prose-base',
        'prose-code:rounded-xl prose-img:rounded-xl',
        'prose-img:relative prose-img:w-full prose-img:cursor-pointer prose-img:overflow-hidden prose-img:object-cover prose-video:w-full [&_iframe]:aspect-video [&_iframe]:w-full',
        'prose-img:bg-gradient-to-r prose-img:from-zinc-800/50 prose-img:via-zinc-800 prose-img:to-zinc-800/50',
        'prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:p-0',
        className,
      )}
    >
      <MarkdownToJSX
        {...props}
        options={{
          overrides: {
            code: { component: Code },
          },
        }}
      >
        {preparedMarkdown}
      </MarkdownToJSX>
    </div>
  );
}
