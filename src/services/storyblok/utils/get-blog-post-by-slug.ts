import { storyblokApi } from '@/services/storyblok/api';

import type { SbBlogPostData } from '../types';

import { getStoryblokVersion } from './get-storyblok-version';

export const getBlogPostBySlug = async (slug: string): Promise<SbBlogPostData | null> => {
  if (!slug) return null;

  const version = getStoryblokVersion();
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
