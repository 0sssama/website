/* eslint-disable no-console */
import type { NewsletterFormSchema } from '../newsletter-cta.types';

import { newsletterFormSchema } from './schema';

export async function submitNewsletterForm(values: NewsletterFormSchema) {
  const validation = newsletterFormSchema.safeParse(values);

  if (!validation.success) throw new Error(validation.error.errors?.[0].message || 'Validation error');

  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      console.error('Error submitting newsletter form:', response.statusText);
      throw new Error('Error submitting newsletter form');
    }

    return response;
  } catch (error) {
    console.error('Error submitting newsletter form:', error);
    throw new Error('Error submitting newsletter form');
  }
}
