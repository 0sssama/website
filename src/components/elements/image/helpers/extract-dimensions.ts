import type { ImageModel } from '@/base/types/image';

export const extractDimensions = (filename: ImageModel['filename']): { width: number; height: number } => {
  if (!filename || typeof filename !== 'string') return { width: 0, height: 0 };

  const [width, height] = filename
    ?.split('/')?.[5]
    ?.split('x')
    ?.map((dimension) => Number.parseInt(dimension, 10)) || [0, 0];

  if (Number.isNaN(width) || Number.isNaN(height)) return { width: 0, height: 0 };

  return { width, height };
};
