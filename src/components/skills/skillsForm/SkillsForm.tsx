'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useEffect, useState } from 'react';
import { CheckedState } from '@radix-ui/react-checkbox';
import { SkillsFormTitle } from '@/components/skills/skillsForm/SkillsFormTitle';
import { prepareUrlKey, UrlKeyFormField } from '@/components/common/form';

export const skillsFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters',
  }),
  urlKey: z.string().min(2, {
    message: 'Url key must be at least 2 characters',
  }),
});

type TSkillsFormProps = {
  callback: (values: z.infer<typeof skillsFormSchema>) => void;
  title?: string;
  urlKey?: string;
};
export function SkillsForm({ callback, title = '', urlKey = '' }: TSkillsFormProps) {
  const [isUrlKeyDefaultValue, setIsUrlKeyDefaultValue] = useState<CheckedState>(!urlKey);

  const form = useForm<z.infer<typeof skillsFormSchema>>({
    resolver: zodResolver(skillsFormSchema),
    defaultValues: {
      title,
      urlKey,
    },
  });

  useEffect(() => {
    if (isUrlKeyDefaultValue) {
      const title = form.getValues('title');
      form.setValue('urlKey', prepareUrlKey(title));
    }
  }, [isUrlKeyDefaultValue]);

  function onSubmit(values: z.infer<typeof skillsFormSchema>) {
    callback(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <SkillsFormTitle
          form={form}
          isUrlKeyDefaultValue={isUrlKeyDefaultValue}
          prepareUrlKey={prepareUrlKey}
        />
        <UrlKeyFormField
          form={form}
          setIsUrlKeyDefaultValue={setIsUrlKeyDefaultValue}
          isUrlKeyDefaultValue={isUrlKeyDefaultValue}
          prepareUrlKey={prepareUrlKey}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
