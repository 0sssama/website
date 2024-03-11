/* eslint-disable no-console */
import { storyblokApi } from '@/base/services/storyblok';

export const getAllBlogPosts = async () => {
  const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft';

  const sbApi = storyblokApi();

  try {
    const posts = await sbApi.getStories({ version, content_type: 'blog_post' });

    if (!posts) return [];

    return posts.data.stories;
  } catch {
    console.error('Error getting all storyblok blog posts.');
    return [];
  }
};
