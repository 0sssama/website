import { notFound } from 'next/navigation';

import { getPageBySlug } from '@/base/services/storyblok';
import { PageBuilder } from '@/components/templates/page-builder';
import { getPageMetadata } from '@/base/services/storyblok/utils/get-page-metadata';

export default async function HomePage() {
  const page = await getPageBySlug('home');

  if (!page) notFound();

  return (
    <main>
      <PageBuilder sections={page.sections ?? []} />
    </main>
  );
}

export async function generateMetadata() {
  return getPageMetadata('home');
}
