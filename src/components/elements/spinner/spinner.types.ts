import type { variants } from './spinner';

export interface SpinnerProps {
  size?: keyof typeof variants;
  className?: string;
}
