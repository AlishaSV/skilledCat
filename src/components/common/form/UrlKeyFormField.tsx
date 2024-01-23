import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type TUrlKeyFormFieldProps<
  TFieldValues extends FieldValues & { urlKey: string } = FieldValues & { urlKey: string },
> = {
  isUrlKeyDefaultValue: CheckedState;
  setIsUrlKeyDefaultValue: (checked: CheckedState) => void;
  prepareUrlKey: (value: string) => string;
  form: UseFormReturn<TFieldValues>;
};

/**
 * Field like 'urlKey' will always exist because generic contains urlKey (reference for ts-ignore at 44 line)
 *
 * @param isUrlKeyDefaultValue
 * @param setIsUrlKeyDefaultValue
 * @param prepareUrlKey
 * @param form
 * @constructor
 */
export function UrlKeyFormField<
  TFieldValues extends FieldValues & { urlKey: string } = FieldValues & { urlKey: string },
>({
  isUrlKeyDefaultValue,
  setIsUrlKeyDefaultValue,
  prepareUrlKey,
  form,
}: TUrlKeyFormFieldProps<TFieldValues>) {
  return (
    <FormField
      control={form.control}
      // @ts-ignore
      name={'urlKey'}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Url key</FormLabel>
          <div className={'flex gap-1'}>
            <FormControl>
              <Input
                placeholder="url key"
                {...field}
                disabled={!!isUrlKeyDefaultValue}
                onChange={(event) => {
                  event.target.value = prepareUrlKey(event.target.value);
                  field.onChange(event);
                }}
              />
            </FormControl>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="urlKey"
                checked={isUrlKeyDefaultValue}
                onCheckedChange={(checked) => setIsUrlKeyDefaultValue(checked)}
              />
              <label
                htmlFor="urlKey"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                use default value for it
              </label>
            </div>
          </div>
          <FormDescription>Enter url key.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
