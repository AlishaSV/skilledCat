import { Checkbox } from '@/components/ui/checkbox';

export type TSortItem = {
  code: 'added' | 'notAdded';
  label: string;
};
type TDivisionFormSkillsFiltersSortItemProps = {
  onCheckedChange: (checked: boolean) => void;
  checked: boolean;
};
export const DivisionFormSkillsFiltersSortItem = ({
  onCheckedChange,
  label,
  checked,
}: TDivisionFormSkillsFiltersSortItemProps & TSortItem) => {
  return (
    <div className={'flex gap-2 items-center'}>
      <Checkbox
        checked={checked}
        onCheckedChange={(checked) => {
          onCheckedChange(!!checked);
        }}
      />
      {label}
    </div>
  );
};
