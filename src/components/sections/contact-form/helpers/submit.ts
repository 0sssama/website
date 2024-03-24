/* eslint-disable no-console */
import type { ContactFormSchema } from '../contact-form.types';

import { contactFormSchema } from './schema';

export async function submitContactForm(values: ContactFormSchema) {
  const validation = contactFormSchema.safeParse(values);

  if (!validation.success) throw new Error(validation.error.errors?.[0].message || 'Validation error');

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      console.error('Error submitting contact form:', response.statusText);
      throw new Error('Error submitting contact form');
    }

    return response;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Error submitting contact form');
  }
}
