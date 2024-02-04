import type { LinkModel } from '@/base/types/link';
import type { ButtonModel } from '@/components/ui/button';

export interface HeaderModel {
  navLinks: LinkModel[];
  button: ButtonModel[];
}

export interface HeaderProps extends HeaderModel {
  className?: string;
}
