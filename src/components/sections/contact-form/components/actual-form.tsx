'use client';

import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/elements/form';
import { Input } from '@/components/elements/input';
import { Textarea } from '@/components/elements/textarea';
import { Button } from '@/components/elements/button';

import { submitContactForm } from '../helpers/submit';
import { contactDefaultValues, contactFormSchema } from '../helpers/schema';
import type { ActualFormProps, ContactFormSchema } from '../contact-form.types';

export default function ActualForm(formProps: ActualFormProps) {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactDefaultValues,
  });

  const { isSubmitting, isSubmitSuccessful, isSubmitted, isValid, errors } = useFormState({ control: form.control });

  const onSubmit = (values: ContactFormSchema) =>
    submitContactForm(values)
      .then((res) => {
        if (res.ok && res.status === 200) {
          toast.success('Message sent successfully!');
          form.clearErrors();
        }
      })
      .catch((error) => {
        form.setError('root', { message: 'Unable to send message. Please try again later.' });
        toast.error(error.message);
      });

  if (isSubmitted && isSubmitSuccessful && isValid)
    return (
      <div className="flex w-full flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl">{formProps.success_title}</h1>
        <p className="mb-6 mt-4 max-w-96 text-zinc-400">{formProps.success_message}</p>
        <div className="flex w-full items-center gap-2 md:justify-center md:gap-4">
          {Array.isArray(formProps.success_btns) &&
            formProps.success_btns.map((button, index) => <Button key={index} {...button} />)}
        </div>
      </div>
    );

  return (
    <Form {...form}>
      {errors.root && (
        <div className="text-cente flex w-full items-center justify-center rounded-2xl border border-destructive/50 bg-destructive/10 px-4 py-8">
          <p className="text-destructive">{errors.root.message}</p>
        </div>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col items-center space-y-4">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{formProps.name_label}</FormLabel>
                <FormControl>
                  <Input placeholder={formProps.name_placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{formProps.email_label}</FormLabel>
                <FormControl>
                  <Input placeholder={formProps.email_placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>{formProps.subject_label}</FormLabel>
              <FormControl>
                <Input placeholder={formProps.subject_placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>{formProps.message_label}</FormLabel>
              <FormControl>
                <Textarea placeholder={formProps.message_placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="!mt-6 w-full" type="submit">
          {isSubmitting ? 'Submitting...' : formProps.button_label}
        </Button>
      </form>
    </Form>
  );
}
