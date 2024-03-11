import { notFound, redirect } from 'next/navigation';

import { getAllPages, getPageBySlug, getPageMetadata } from '@/base/services/storyblok';
import { PageBuilder } from '@/components/templates/page-builder';
import type { NextPageProps } from '@/base/types/next';

export default async function Page({ params }: NextPageProps) {
  if (params.slug === 'home') redirect('/');

  const page = await getPageBySlug(params.slug);

  if (!page) notFound();

  return (
    <main className="flex min-h-[800px] flex-col gap-10">
      <PageBuilder sections={page.sections ?? []} />
    </main>
  );
}

export async function generateMetadata({ params }: NextPageProps) {
  return await getPageMetadata(params.slug);
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page) => {
    if (page.slug === 'home') return;
    return {
      slug: page.slug,
    };
  });
}
