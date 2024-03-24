'use client';

import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/elements/form';
import { Input } from '@/components/elements/input';
import { Button } from '@/components/elements/button';
import { Icon } from '@/components/elements/icon';
import Spinner from '@/components/elements/spinner/spinner';
import { useLocalStorage } from '@/base/hooks/use-local-storage';

import type { NewsletterFormProps, NewsletterFormSchema } from '../newsletter-cta.types';
import { newsletterDefaultValues, newsletterFormSchema } from '../helpers/schema';
import { submitNewsletterForm } from '../helpers/submit';

export default function NewsletterForm({ inputPlaceholder, buttonText }: NewsletterFormProps) {
  const form = useForm<NewsletterFormSchema>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: newsletterDefaultValues,
  });

  const { isSubmitting, isSubmitSuccessful, isSubmitted, isValid } = useFormState({ control: form.control });

  const [registered, setRegistered] = useLocalStorage('registered', false);

  const onSubmit = (values: NewsletterFormSchema) =>
    submitNewsletterForm(values)
      .then((res) => {
        if (res.ok && res.status === 200) {
          toast.success('Success! Thank you for subscribing :)');
          form.clearErrors();
          setRegistered(true);
        }
      })
      .catch((error) => {
        form.setError('root', { message: 'Unable to send message. Please try again later.' });
        toast.error(error.message);
      });

  if ((isSubmitted && isSubmitSuccessful && isValid) || registered)
    return (
      <div className="flex w-full items-center justify-center p-4">
        <Icon variant="Check" className="mr-2 h-6 w-6 *:text-zinc-900" />
        <p className="text-zinc-700">You&apos;re subscribed! Thank you.</p>
      </div>
    );

  return (
    <Form {...form}>
      <form
        className="flex w-full items-center justify-center gap-4 max-md:flex-col md:gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="relative flex flex-col max-md:w-full md:min-w-[280px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder={inputPlaceholder} variant="inverted" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant="inverted" className="max-md:w-full" type="submit">
          {isSubmitting ? <Spinner className="border-white" size="xs" /> : <>{buttonText} &rarr;</>}
        </Button>
      </form>
    </Form>
  );
}
