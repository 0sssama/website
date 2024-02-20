import type { ButtonModel } from '@/components/ui/button';

export interface CallToActionProps {
  title: string;
  description: string;

  buttons: ButtonModel[];
}

export interface ListButtonsProps {
  buttons: ButtonModel[];
}
