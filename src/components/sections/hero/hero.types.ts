import type { ButtonModel } from '@/components/elements/button';

export interface HeroModel {
  heading?: string;
  description?: string;
  buttons?: ButtonModel[];
}

export interface HeroProps extends HeroModel {
  className?: string;
}
