import { notFound } from 'next/navigation';

import { getPageBySlug, getPageMetadata } from '@/base/services/storyblok';
import { PageBuilder } from '@/components/templates/page-builder';

export default async function HomePage() {
  const page = await getPageBySlug('home');

  if (!page) notFound();

  return (
    <main className="flex flex-col gap-10">
      <PageBuilder sections={page.sections ?? []} />
    </main>
  );
}

export async function generateMetadata() {
  return await getPageMetadata('home');
}
