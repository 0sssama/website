import type { SbBlogPostData } from '@/base/services/storyblok';

export interface BlogPostCardProps {
  post: SbBlogPostData;
  fullSlug: string;
  className?: string;
}
