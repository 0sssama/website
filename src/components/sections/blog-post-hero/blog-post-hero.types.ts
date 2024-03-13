import type { SbBlogPostData } from '@/base/services/storyblok';

export interface BlogPostHeroProps {
  post: SbBlogPostData;
  createdAt: string;
}
