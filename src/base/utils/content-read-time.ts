import { sanitizeMarkdown } from './sanitize-markdown';

const AVERAGE_WPM = 200;

/**
 *
 * @param content Markdown content, typically from a blog post
 *
 * @returns The estimated read time in minutes
 */
export const contentReadTime = (content: string): number => {
  const preparedMarkdown = sanitizeMarkdown(content) || '';

  const words = preparedMarkdown.split(' ').length;

  return Math.ceil(words / AVERAGE_WPM);
};
