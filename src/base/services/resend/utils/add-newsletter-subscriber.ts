import { resend } from '@/base/services/resend';

export const addNewsletterSubscriber = async (email: string) => {
  if (!process.env.RESEND_NEWSLETTER_AUDIENCE_ID) throw new Error('RESEND_NEWSLETTER_AUDIENCE_ID is not set');

  return await resend.contacts.create({
    audienceId: process.env.RESEND_NEWSLETTER_AUDIENCE_ID,
    email,
  });
};
