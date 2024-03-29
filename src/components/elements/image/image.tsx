import { default as NextImage } from 'next/image';

import { cn } from '@/base/utils/cn';

import { extractDimensions } from './helpers/extract-dimensions';
import type { ImageProps } from './image.types';

export default function Image({ image, ...props }: ImageProps) {
  const { filename, alt, title } = image;
  const { width, height } = extractDimensions(filename);

  const { fill, className } = props;
  const dimensions = { width: props.width || width, height: props.height || height };

  if (!filename) return null;

  return (
    <NextImage
      src={filename}
      alt={alt || title || ''}
      {...(!fill && dimensions)}
      className={cn('pointer-events-none', fill && 'object-cover', className)}
      {...props}
    />
  );
}
