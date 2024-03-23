import type { HrefModel } from '@/base/types/link';

export const isExternalLink = (href: HrefModel): boolean => {
  const url = href.url;

  if (!url) return false;

  return url.startsWith('http') || url.startsWith('mailto') || url.startsWith('tel');
};
