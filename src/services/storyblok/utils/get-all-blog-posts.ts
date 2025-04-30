import type { SbBlogPostData, SbStoryData } from '@/services/storyblok';
import { storyblokApi } from '@/services/storyblok';

export const getAllBlogPosts = async (): Promise<SbStoryData<SbBlogPostData>[]> => {
  const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft';
  const cache = process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store';

  const sbApi = storyblokApi();

  try {
    const posts = await sbApi.getStories({ version, content_type: 'blog_post' }, { cache });

    if (!posts) return [];

    return posts.data.stories as SbStoryData<SbBlogPostData>[];
  } catch {
    console.error('Error getting all storyblok blog posts.');
    return [];
  }
};
