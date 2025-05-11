import type { SbPageData, SbStoryData } from '@/services/storyblok';
import { storyblokApi } from '@/services/storyblok';

import { getStoryblokVersion } from './get-storyblok-version';

export const getAllPages = async (): Promise<SbStoryData<SbPageData>[]> => {
  const version = getStoryblokVersion();
  const cache = process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store';

  const sbApi = storyblokApi();

  try {
    const pages = await sbApi.getStories({ version, content_type: 'page' }, { cache });

    if (!pages) return [];

    return pages.data.stories as SbStoryData<SbPageData>[];
  } catch {
    console.error('Error getting all storyblok pages.');
    return [];
  }
};
