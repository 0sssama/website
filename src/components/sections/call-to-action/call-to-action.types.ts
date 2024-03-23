import type { ButtonModel } from '@/components/elements/button';

export interface CallToActionProps {
  title?: string;
  description?: string;

  buttons?: ButtonModel[];
}

export interface ListButtonsProps {
  buttons?: ButtonModel[];
}
