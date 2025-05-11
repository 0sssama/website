export const getStoryblokVersion = (): 'published' | 'draft' => {
  const version = process.env.NEXT_PUBLIC_STORYBLOK_VERSION;

  if (version) {
    return version as 'published' | 'draft';
  }

  return process.env.NODE_ENV === 'production' ? 'published' : 'draft';
};
