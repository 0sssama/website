import clsx from 'clsx';

import type { ContainerProps } from './container.types';

export default function Container({ children, as: Component = 'section', className }: ContainerProps) {
  return <Component className={clsx('container relative m-auto w-full', className)}>{children}</Component>;
}
