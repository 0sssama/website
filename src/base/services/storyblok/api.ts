/* eslint-disable no-console */
import { storyblokInit, apiPlugin, getStoryblokApi } from '@storyblok/react/rsc';

import { componentsRegistry } from '@/base/utils/components-registry';

export const initStoryblok = () => {
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
};

export const storyblokApi = () => {
  try {
    initStoryblok();

    return getStoryblokApi();
  } catch (error) {
    console.error(error);
    throw new Error('Error initializing Storyblok API');
  }
};
