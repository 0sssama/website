import type { ReactNode } from 'react';

export interface ContainerProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}
