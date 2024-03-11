import type { ImageProps as NextImageProps } from 'next/image';

import type { ImageModel } from '@/base/types/image';

export interface ImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  image: ImageModel;
}
