import { notFound } from 'next/navigation';

import { getAllBlogPosts, getBlogPostBySlug } from '@/base/services/storyblok';
import { Markdown } from '@/components/organisms/markdown';
import { BlogPostHero } from '@/components/sections/blog-post-hero';
import type { NextPageProps } from '@/base/types/next';
import { getBlogPostMetadata } from '@/base/services/storyblok/utils/get-blog-post-metadata';

export default async function BlogPost({ params }: NextPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  console.log(params.slug);

  if (!post) notFound();

  // submit that the post was viewed to a small db

  return (
    <>
      <BlogPostHero post={post} createdAt={post.createdAt} />
      <article className="container my-16">
        <Markdown content={post.content} />
      </article>
    </>
  );
}

export async function generateMetadata({ params }: NextPageProps) {
  return await getBlogPostMetadata(params.slug);
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}
