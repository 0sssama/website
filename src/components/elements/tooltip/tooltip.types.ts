import type { ReactNode } from 'react';

export interface TooltipProps {
  children?: ReactNode;
  content: string;
  offset?: number;
  delay?: number;
  isOpen?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}
