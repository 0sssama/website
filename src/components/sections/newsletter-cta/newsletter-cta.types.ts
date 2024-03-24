import type { z } from 'zod';

import type { newsletterFormSchema } from './helpers/schema';

export interface NewsletterCTAProps {
  title?: string;
  description?: string;

  bottomNote?: string;
  inputPlaceholder?: string;
  buttonText?: string;
}

export interface NewsletterFormProps {
  inputPlaceholder?: string;
  buttonText?: string;
}

export type NewsletterFormSchema = z.infer<typeof newsletterFormSchema>;
