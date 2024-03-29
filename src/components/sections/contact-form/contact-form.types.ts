import type { z } from 'zod';

import type { ButtonModel, ButtonProps } from '@/components/elements/button';

import type { contactFormSchema } from './helpers/schema';

export interface ContactFormProps {
  // section
  title: string;

  // form
  name_label: string;
  name_placeholder: string;
  email_label: string;
  email_placeholder: string;
  subject_label: string;
  subject_placeholder: string;
  message_label: string;
  message_placeholder: string;

  // button
  button_label: string;

  // success
  success_title: string;
  success_message: string;
  success_btns: ButtonModel[];
}

export interface SubmitButtonProps extends ButtonProps {}

export type ActualFormProps = Omit<ContactFormProps, 'title'>;

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export interface FormState {
  success: boolean;
  error: string | null;
}
