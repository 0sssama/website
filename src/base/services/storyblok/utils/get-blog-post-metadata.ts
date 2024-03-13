import type { Metadata } from 'next';

import { metadata } from '@/app/layout';
import { extractDimensions } from '@/components/atoms/image/helpers/extract-dimensions';

import { getBlogPostBySlug } from './get-blog-post-by-slug';

export const getBlogPostMetadata = async (slug: string): Promise<Metadata> => {
  const post = await getBlogPostBySlug(slug);

  if (!post) return metadata;

  const postSeo = post.seo?.[0];

  const postImage = post.image?.filename || '';
  const postSeoImage = postSeo?.ogImage?.filename || '';

  const { width: postImageWidth, height: postImageHeight } = extractDimensions(postImage) || { width: 0, height: 0 };
  const { width: postSeoImageWidth, height: postSeoImageHeight } = extractDimensions(postSeoImage) || {
    width: 0,
    height: 0,
  };

  return {
    title: postSeo?.title || `${post.title} / Blog / Labrahmi` || '',
    description: postSeo?.description || `${post.excerpt} - Read more at Labrahmi.me's Blog` || '',

    robots: {
      index: !postSeo?.noIndex,
      follow: !postSeo?.noIndex,
      nocache: !postSeo?.noIndex,
    },

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    },

    openGraph: {
      title: postSeo?.title || `${post.title} / Blog / Labrahmi` || '',
      description: postSeo?.description || `${post.excerpt} - Read more at Labrahmi.me's Blog` || '',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Labrahmi',
      images: [
        ...(postSeoImage
          ? [
              {
                url: postSeoImage,
                alt: post.title,
                width: postSeoImageWidth,
                height: postSeoImageHeight,
              },
            ]
          : []),
        ...(postImage
          ? [
              {
                url: postImage,
                alt: post.title,
                width: postImageWidth,
                height: postImageHeight,
              },
            ]
          : []),
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.jpg`,
          alt: 'Labrahmi.me',
          type: 'image/jpeg',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: postSeo?.ogType || 'article',
    },
  } as Metadata;
};
