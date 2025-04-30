import { storyblokApi } from '@/services/storyblok/api';

import type { SbBlogPostData } from '../types';

export const getBlogPostBySlug = async (slug: string): Promise<SbBlogPostData | null> => {
  if (!slug) return null;

  const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft';
  const cache = process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store';

  const sbApi = storyblokApi();

  try {
    const post = await sbApi.getStory(`blog/${slug}`, { version }, { cache });

    return post.data.story.content as SbBlogPostData;
  } catch {
    console.error('Error getting blog post by slug, No blog post found with slug:', slug);
    return null;
  }
};
