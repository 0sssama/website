/* eslint-disable jsx-a11y/alt-text */
import { formatDate } from '@/utils/format-date';
import { contentReadTime } from '@/utils/content-read-time';
import { Image } from '@/components/elements/image';

import type { BlogPostHeroProps } from './blog-post-hero.types';

export default function BlogPostHero({ post, createdAt }: BlogPostHeroProps) {
  const formattedDate = formatDate(createdAt);
  const readTime = contentReadTime(post.content || '');

  return (
    <section className="relative w-full pt-32 pb-4 md:pt-52 md:pb-10">
      <div className="container">
        <h1 className="pb-3 text-3xl md:text-5xl">{post.title}</h1>
        <p className="mb-4 text-sm text-zinc-400">
          Written on {formattedDate} • {readTime} min read
        </p>
        <p className="text-zinc-300 md:max-w-[80%]">{post.excerpt}</p>
      </div>
      <div className="pointer-events-none absolute -top-20 right-0 bottom-0 left-0 z-[-1] rotate-180 bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4.03rem_4.1rem] opacity-5" />
      <div className="pointer-events-none absolute inset-0 z-[-2] after:absolute after:inset-0 after:bg-linear-to-t after:from-zinc-900 after:to-zinc-800/50 after:backdrop-blur-sm">
        {post.image && <Image image={post.image} fill priority />}
      </div>
    </section>
  );
}
