import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';
import { skillsFormSchema } from '@/components/skills/skillsForm';
import { CheckedState } from '@radix-ui/react-checkbox';

type TSkillsFormTitleProps = {
  form: UseFormReturn<z.infer<typeof skillsFormSchema>>;
  prepareUrlKey: (value: string) => string;
  isUrlKeyDefaultValue: CheckedState;
};
export const SkillsFormTitle = ({
  form,
  prepareUrlKey,
  isUrlKeyDefaultValue,
}: TSkillsFormTitleProps) => {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input
              placeholder="title"
              {...field}
              onChange={(event) => {
                field.onChange(event);
                if (isUrlKeyDefaultValue) {
                  form.setValue('urlKey', prepareUrlKey(event.target.value));
                }
              }}
            />
          </FormControl>
          <FormDescription>Enter skill title.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
