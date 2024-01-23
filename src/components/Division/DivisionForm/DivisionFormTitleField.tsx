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
import { divisionFormSchema } from '@/components/Division/DivisionForm/DivisionForm';
import { CheckedState } from '@radix-ui/react-checkbox';

type TDivisionFormTitleFieldProps = {
  form: UseFormReturn<z.infer<typeof divisionFormSchema>>;
  prepareUrlKey: (value: string) => string;
  isUrlKeyDefaultValue: CheckedState;
};
export const DivisionFormTitleField = ({
  form,
  isUrlKeyDefaultValue,
  prepareUrlKey,
}: TDivisionFormTitleFieldProps) => {
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
          <FormDescription>Enter division title.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
