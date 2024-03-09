import type { Metadata } from 'next';

import { metadata } from '@/app/layout';

import { getPageBySlug } from './get-page-by-slug';

export const getPageMetadata = async (slug: string): Promise<Metadata> => {
  const page = await getPageBySlug(slug);

  if (!page) return metadata;

  const seo = page.seo?.[0];

  if (!seo) return metadata;

  return {
    title: seo.title,
    description: seo.description,

    robots: {
      index: !seo.noIndex,
      follow: !seo.noIndex,
      nocache: !seo.noIndex,
    },

    alternates: {
      canonical: slug === 'home' ? process.env.NEXT_PUBLIC_SITE_URL : `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Labrahmi',
      images: [
        {
          url: `https://new.labrahmi.me/images/og-image.jpg`,
          alt: 'Labrahmi.me',
          type: 'image/jpeg',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: seo.ogType || 'website',
    },
  } as Metadata;
};
