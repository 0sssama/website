import { default as NextImage } from 'next/image';

import { extractDimensions } from './helpers/extract-dimensions';
import type { ImageProps } from './image.types';

export default function Image({ image, ...props }: ImageProps) {
  const { filename, alt, title } = image;
  const { width, height } = extractDimensions(filename);

  const { fill } = props;
  const dimensions = { width: props.width || width, height: props.height || height };

  if (!filename) return null;

  return <NextImage src={filename} alt={alt || title} {...(!fill && dimensions)} {...props} />;
}
