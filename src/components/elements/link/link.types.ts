import type { ReactNode } from 'react';

import type { LinkModel } from '@/base/types/link';

export interface LinkProps extends LinkModel {
  className?: string;
  children?: ReactNode;
}
