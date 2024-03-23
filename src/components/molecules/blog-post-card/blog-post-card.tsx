/* eslint-disable jsx-a11y/alt-text */
import { cn } from '@/base/utils/cn';
import { Link } from '@/components/elements/link';
import { Image } from '@/components/elements/image';
import { formatDate } from '@/base/utils/format-date';
import { contentReadTime } from '@/base/utils/content-read-time';

import type { BlogPostCardProps } from './blog-post-card.types';

export default function BlogPostCard({ post, fullSlug, className }: BlogPostCardProps) {
  const formattedDate = formatDate(post.createdAt);
  const readTime = contentReadTime(post.content || '');

  return (
    <Link
      className={cn(
        className,
        'bg-zinc-transparent relative flex flex-col overflow-hidden rounded-xl border border-border hover:bg-zinc-900 hover:drop-shadow-border',
      )}
      href={{ url: `/${fullSlug}` }}
    >
      <div className="relative max-h-[250px] min-h-[210px] border-b border-b-border bg-border">
        {post.image && <Image image={post.image} fill />}
      </div>
      <div className="flex flex-col gap-2 px-4 py-5">
        <p className="text-xs text-zinc-500">
          {formattedDate} • {readTime} min read
        </p>
        <h2 className="text-2xl">{post.title}</h2>
        <p className="line-clamp-3 text-sm text-zinc-400">{post.excerpt}</p>
      </div>
    </Link>
  );
}
