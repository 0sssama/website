import type { LinkModel } from '@/base/types/link';
import type { ButtonModel } from '@/components/elements/button';

export interface HeaderModel {
  navLinks: LinkModel[];
  button: ButtonModel[];
}

export interface HeaderProps extends HeaderModel {
  className?: string;
}
