import type { SbBlogPostData } from '@/services/storyblok';

export interface BlogPostCardProps {
  post: SbBlogPostData;
  fullSlug: string;
  className?: string;
}
