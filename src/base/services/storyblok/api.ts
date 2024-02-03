/* eslint-disable no-console */
import { storyblokInit, apiPlugin, getStoryblokApi } from '@storyblok/react/rsc';

import { componentsRegistry } from '@/base/utils/components-registry';

let storyblokInitialized: boolean = false;
let storyblokApiInstance: ReturnType<typeof getStoryblokApi> | undefined;

export const initStoryblok = () => {
  if (storyblokInitialized) return;

  storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin],
    components: componentsRegistry,
    apiOptions: {
      cache: {
        type: 'memory',
        clear: 'auto',
      },
    },
  });

  storyblokInitialized = true;
};

export const storyblokApi = () => {
  try {
    initStoryblok();

    if (storyblokApiInstance) return storyblokApiInstance;

    const apiInstance = getStoryblokApi();

    storyblokApiInstance = apiInstance;

    return apiInstance;
  } catch (error) {
    console.error(error);
    throw new Error('Error initializing Storyblok API');
  }
};
