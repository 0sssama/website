import { z } from 'zod';

import type { ContactFormSchema } from '../contact-form.types';

export const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'Name is too short' }).max(32, { message: 'Name is too long' }),
  email: z.string().email({ message: 'Invalid email' }),
  subject: z.string().min(5, { message: 'Subject is too short' }).max(64, { message: 'Subject is too long' }),
  message: z.string().min(10, { message: 'Message is too short' }).max(512, { message: 'Message is too long' }),
});

export const contactDefaultValues: ContactFormSchema = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
