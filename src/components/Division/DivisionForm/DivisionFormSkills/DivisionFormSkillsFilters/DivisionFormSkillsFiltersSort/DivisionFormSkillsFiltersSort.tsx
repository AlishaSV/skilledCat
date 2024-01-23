import { Dispatch, SetStateAction } from 'react';
import {
  DivisionFormSkillsFiltersSortItem,
  TSortItem,
} from '@/components/Division/DivisionForm/DivisionFormSkills/DivisionFormSkillsFilters/DivisionFormSkillsFiltersSort/DivisionFormSkillsFiltersSortItem';
import { CollapsibleWithTitle } from '@/components/ui/collapsible';
import { ArrowLeftToLine, ArrowRightFromLine } from 'lucide-react';

export type TDivisionFormSkillsFiltersSortProps = {
  isSortByAdded: boolean | null;
  setIsSortByAdded: Dispatch<SetStateAction<boolean | null>>;
  checked: boolean | null;
};

const sortItems: TSortItem[] = [
  {
    code: 'added',
    label: 'Added',
  },
  {
    code: 'notAdded',
    label: 'Not Added',
  },
];

export const DivisionFormSkillsFiltersSort = ({
  setIsSortByAdded,
  isSortByAdded,
  checked,
}: TDivisionFormSkillsFiltersSortProps) => {
  return (
    <CollapsibleWithTitle
      title={`Sort by ${isSortByAdded != null ? (isSortByAdded ? 'added' : 'not added') : 'all'}`}
      openIcon={<ArrowLeftToLine size={16} color="#427bd7" />}
      closeIcon={<ArrowRightFromLine size={16} color="#427bd7" />}
      className={'flex items-start gap-1 '}
    >
      <div className={'flex gap-1 sss'}>
        {sortItems.map((item) => (
          <DivisionFormSkillsFiltersSortItem
            key={item.code}
            checked={checked === null ? false : item.code === 'added' ? checked : !checked}
            onCheckedChange={(checked) => {
              setIsSortByAdded((prevState) => {
                if (prevState !== null) {
                  return null;
                } else {
                  return item.code === 'added' ? checked : !checked;
                }
              });
            }}
            {...item}
          />
        ))}
      </div>
    </CollapsibleWithTitle>
  );
};
