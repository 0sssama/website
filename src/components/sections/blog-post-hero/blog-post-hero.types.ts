import type { SbBlogPostData } from '@/services/storyblok';

export interface BlogPostHeroProps {
  post: SbBlogPostData;
  createdAt: string;
}
