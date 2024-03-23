import type { VariantProps } from 'class-variance-authority';

import type { HrefModel } from '@/base/types/link';

import type { buttonVariants } from './button';

export interface ButtonModel extends VariantProps<typeof buttonVariants> {
  label?: string;
  href?: HrefModel;
}

export interface ButtonProps extends ButtonModel, React.ButtonHTMLAttributes<HTMLButtonElement> {}
