/* eslint-disable no-console */

import type { SbBlogPostData, SbStoryData } from '@/base/services/storyblok';
import { storyblokApi } from '@/base/services/storyblok';

export const getAllBlogPosts = async (): Promise<SbStoryData<SbBlogPostData>[]> => {
  const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft';

  const sbApi = storyblokApi();

  try {
    const posts = await sbApi.getStories({ version, content_type: 'blog_post' });

    if (!posts) return [];

    return posts.data.stories as SbStoryData<SbBlogPostData>[];
  } catch {
    console.error('Error getting all storyblok blog posts.');
    return [];
  }
};
