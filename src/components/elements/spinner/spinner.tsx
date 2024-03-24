import { cn } from '@/base/utils/cn';

import type { SpinnerProps } from './spinner.types';

export default function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <div
      aria-label="Spinner"
      style={{
        ...variants[size],
      }}
      className={cn('border-currentColor animate-spin rounded-full border-solid !border-t-transparent', className)}
    />
  );
}

export const variants = {
  xs: {
    width: 14,
    height: 14,
    borderWidth: 1,
  },
  sm: {
    width: 26,
    height: 26,
    borderWidth: 1,
  },
  md: {
    width: 36,
    height: 36,
    borderWidth: 2,
  },
  lg: {
    width: 48,
    height: 48,
    borderWidth: 3,
  },
  xl: {
    width: 64,
    height: 64,
    borderWidth: 4,
  },
};
