import { z } from 'zod';

import type { NewsletterFormSchema } from '../newsletter-cta.types';

export const newsletterFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
});

export const newsletterDefaultValues: NewsletterFormSchema = {
  email: '',
};
