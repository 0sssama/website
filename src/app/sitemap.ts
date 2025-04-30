import type { MetadataRoute } from 'next';

import { getAllPages } from '@/services/storyblok';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://labrahmi.me';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPages = await getAllPages();

  return allPages.map((page) => {
    return {
      url: `${siteUrl}/${page.slug === 'home' ? '' : page.slug}`,
      lastModified: new Date(page.published_at || page.created_at).toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    };
  });
}
