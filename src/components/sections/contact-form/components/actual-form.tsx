'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/elements/form';
import { Input } from '@/components/elements/input';
import { Textarea } from '@/components/elements/textarea';
import { Button } from '@/components/elements/button';

import { contactDefaultValues, contactFormSchema } from '../helpers/schema';
import type { ActualFormProps, ContactFormSchema } from '../contact-form.types';

export default function ActualForm(formProps: ActualFormProps) {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactDefaultValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => console.log('submitting'))}
        className="flex w-full flex-col items-center space-y-4"
      >
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
        <Button type="submit" className="!mt-6 w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
