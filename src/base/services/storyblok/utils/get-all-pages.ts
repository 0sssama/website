/* eslint-disable no-console */
import { storyblokApi } from '@/base/services/storyblok';

export const getAllPages = async () => {
  const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft';

  const sbApi = storyblokApi();

  try {
    return await sbApi.getStories({ version });
  } catch {
    console.error('Error getting all storyblok pages.');
    return null;
  }
};
