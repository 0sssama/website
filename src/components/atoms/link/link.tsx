import { default as NextLink } from 'next/link';

import { isExternalLink } from './link.helpers';
import type { LinkProps } from './link.types';

export default function Link({ children, href, label, ...props }: LinkProps) {
  if (href === undefined || (href.url === undefined && href.cached_url === undefined))
    return <div className={props.className}>{label ?? children}</div>;

  const externalProps = isExternalLink(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <NextLink {...props} {...externalProps} href={href.url || href.cached_url || ''}>
      {label ?? children}
    </NextLink>
  );
}
