import { Link } from '@/components/atoms/link';
import { Icon } from '@/components/atoms/icon';

import type { SocialMediaLinkProps } from './social-media-link.types';

export default function SocialMediaLink({ link, icon }: SocialMediaLinkProps) {
  if (!link || !icon) return null;

  const { href, label } = link[0] || {};

  if (!href || !label) return null;

  return (
    <Link
      href={href}
      className="rounded-full border border-zinc-800 bg-zinc-950 p-[10px] hover:bg-zinc-800 active:bg-zinc-800"
    >
      <p className="sr-only">Visit my {label}</p>
      <Icon variant={icon} title={label} className="h-4 w-4" />
    </Link>
  );
}
