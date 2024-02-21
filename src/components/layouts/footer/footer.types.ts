import type { SocialMediaLinkModel } from '@/components/molecules/social-media-link';

export interface FooterModel {
  description?: string;
  copyrightText?: string;
  socialMediaLinks?: SocialMediaLinkModel[];
  includeLocalTime?: boolean;
}

export interface FooterProps extends FooterModel {}
