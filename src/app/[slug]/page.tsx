import { notFound } from 'next/navigation';

import { getPageBySlug } from '@/base/services/storyblok';
import type { NextPageProps } from '@/base/types/next';
import { getPageMetadata } from '@/base/services/storyblok/utils/get-page-metadata';
import { PageBuilder } from '@/components/templates/page-builder';

export default async function Home({ params }: NextPageProps) {
  const page = await getPageBySlug(params.slug);

  if (!page) notFound();

  return (
    <main>
      <PageBuilder sections={page.sections ?? []} />
    </main>
  );
}

export async function generateMetadata({ params }: NextPageProps) {
  return getPageMetadata(params.slug);
}
