import clsx from 'clsx';

import type { ContainerProps } from './container.types';

export default function Container({ children, as: Component = 'section', className }: ContainerProps) {
  return <Component className={clsx('relative m-auto w-full max-w-3xl', className)}>{children}</Component>;
}
