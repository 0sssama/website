import type { IconBaseProps } from './icon-base.types';

export default function IconBase({ title, children, ...props }: IconBaseProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="currentColor" {...props}>
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
}
