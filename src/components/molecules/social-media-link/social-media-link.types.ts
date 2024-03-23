import type { LinkModel } from '@/base/types/link';
import type { IconVariant } from '@/components/elements/icon-base';

export interface SocialMediaLinkModel {
  link?: LinkModel[];
  icon?: IconVariant;
}

export interface SocialMediaLinkProps extends SocialMediaLinkModel {
  className?: string;
}
