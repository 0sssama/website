import type { SbBlogPostData } from '@/base/services/storyblok';

export interface BlogPostCardProps {
  post: SbBlogPostData;
  createdAt: string;
  fullSlug: string;
  className?: string;
}
