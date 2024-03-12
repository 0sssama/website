/* eslint-disable jsx-a11y/alt-text */
import { cn } from '@/base/utils/cn';
import { Link } from '@/components/atoms/link';
import { Image } from '@/components/atoms/image';
import { formatDate } from '@/base/utils/format-date';
import { contentReadTime } from '@/base/utils/content-read-time';

import type { BlogPostCardProps } from './blog-post-card.types';

export default function BlogPostCard({ post, createdAt, fullSlug, className }: BlogPostCardProps) {
  const formattedDate = formatDate(createdAt);
  const readTime = contentReadTime(post.content || '');

  return (
    <Link
      className={cn(
        className,
        'bg-zinc-transparent relative flex flex-col overflow-hidden rounded-xl border border-border hover:bg-zinc-900 hover:drop-shadow-border',
      )}
      href={{ url: `/${fullSlug}` }}
    >
      {post.image && (
        <div className="relative max-h-[250px] min-h-[210px] border-b border-b-border *:object-cover">
          <Image image={post.image} fill />
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <p className="text-xs text-zinc-500">
          {formattedDate} • {readTime} min read
        </p>
        <h2 className="text-2xl">{post.title}</h2>
        <p className="line-clamp-3 text-sm text-zinc-400">{post.excerpt}</p>
      </div>
    </Link>
  );
}
