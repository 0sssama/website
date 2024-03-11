/* eslint-disable no-console */
import { storyblokApi } from '@/base/services/storyblok';

export const getAllPages = async () => {
  const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft';

  const sbApi = storyblokApi();

  try {
    const pages = await sbApi.getStories({ version, content_type: 'page' });

    if (!pages) return [];

    return pages.data.stories;
  } catch {
    console.error('Error getting all storyblok pages.');
    return [];
  }
};
