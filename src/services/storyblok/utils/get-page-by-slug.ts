import { storyblokApi } from '@/services/storyblok/api';

import type { SbPageData } from '../types';

export const getPageBySlug = async (slug: string): Promise<SbPageData | null> => {
  if (!slug) return null;

  const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft';
  const cache = process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store';

  const sbApi = storyblokApi();
  try {
    const page = await sbApi.getStory(slug, { version }, { cache });

    return page.data.story.content as SbPageData;
  } catch {
    console.error('Error getting page by slug, No page found with slug:', slug);
    return null;
  }
};
