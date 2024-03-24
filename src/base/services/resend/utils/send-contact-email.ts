import type { ContactFormSchema } from '@/components/sections/contact-form/contact-form.types';
import { resend } from '@/base/services/resend';

export const sendContactEmail = async (body: ContactFormSchema) =>
  await resend.emails.send({
    to: 'labrahmioussama@gmail.com',
    from: 'contact@labrahmi.me',
    subject: 'Labrahmi.me: 🚀 New contact form submission',
    // TODO: add proper email template
    html: `<b>Name:</b> ${body.name}<br /><b>Email:</b> ${body.email}<br /><b>Subject:</b> ${body.subject}<br /><b>Message:</b> ${body.message}<br />`,
  });
