import StoryblokStory from '@storyblok/react/story';
import { notFound } from 'next/navigation';

import { getPageBySlug } from '@/base/services/storyblok';
import type { NextPageProps } from '@/base/types/next';

export default async function Home({ params }: NextPageProps) {
  const page = await getPageBySlug(params.slug);

  if (!page) notFound();

  return (
    <div>
      <StoryblokStory story={page} />
    </div>
  );
}
