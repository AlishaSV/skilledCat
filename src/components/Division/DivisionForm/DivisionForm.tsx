'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { array, string } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { DivisionFormTitleField } from '@/components/Division/DivisionForm/DivisionFormTitleField';
import { DivisionFormSkills } from '@/components/Division/DivisionForm/DivisionFormSkills';
import { useEffect, useMemo, useState } from 'react';
import { CheckedState } from '@radix-ui/react-checkbox';
import { prepareUrlKey, UrlKeyFormField } from '@/components/common/form';

export const divisionFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters',
  }),
  added: array(string()),
  removed: array(string()),
  urlKey: z.string().min(2, {
    message: 'Url Key must be at least 2 characters',
  }),
});

type TDivisionFormProps = {
  onSubmitCallback: (values: z.infer<typeof divisionFormSchema>) => void;
  title?: string;
  urlKey?: string;
  initAdded?: string[];
};
export function DivisionForm({
  onSubmitCallback,
  title = '',
  urlKey = '',
  initAdded = [],
}: TDivisionFormProps) {
  const [isUrlKeyDefaultValue, setIsUrlKeyDefaultValue] = useState<CheckedState>(true);

  const form = useForm<z.infer<typeof divisionFormSchema>>({
    resolver: zodResolver(divisionFormSchema),
    defaultValues: {
      title,
      added: [],
      removed: [],
      urlKey,
    },
  });

  const allAdded = useMemo(() => {
    let { added, removed } = form.getValues();
    /**
     * map - converts array of TSkill items to array of ids (array of numbers).
     * concat - merges ids (arrays returned from map) with added
     *
     */
    return added
      .concat(initAdded)
      .filter((item) => !removed.some((removedItem) => removedItem === item));
  }, [form.formState, initAdded]);

  useEffect(() => {
    if (isUrlKeyDefaultValue) {
      const title = form.getValues('title');
      form.setValue('urlKey', prepareUrlKey(title));
    }
  }, [isUrlKeyDefaultValue]);

  function onSubmit(values: z.infer<typeof divisionFormSchema>) {
    onSubmitCallback(values);
  }

  const updateValue = (name: 'added' | 'removed', items: string[]) => {
    form.setValue(name, items, { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <DivisionFormTitleField
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
        <DivisionFormSkills
          addedSkills={allAdded}
          handleRemove={(skillId) => {
            let { removed, added } = form.getValues();
            if (added.includes(skillId)) {
              updateValue(
                'added',
                added.filter((item) => item !== skillId),
              );
            } else if (!removed.includes(skillId)) {
              removed.push(skillId);
              updateValue('removed', removed);
            }
          }}
          handleAdd={(skillId) => {
            let { added, removed } = form.getValues();
            if (removed.includes(skillId)) {
              updateValue(
                'removed',
                removed.filter((item) => item !== skillId),
              );
            } else if (!added.includes(skillId)) {
              added.push(skillId);
              updateValue('added', added);
            }
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
