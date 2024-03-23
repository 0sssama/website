import type { VariantProps } from 'class-variance-authority';
import type { InputHTMLAttributes } from 'react';

import type { inputVariants } from './input';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}
