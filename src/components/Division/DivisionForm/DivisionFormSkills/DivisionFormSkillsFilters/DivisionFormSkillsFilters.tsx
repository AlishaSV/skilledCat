import {
  DivisionFormSkillsFilterSearch,
  TDivisionFormSkillsFilterSearchProps,
} from '@/components/Division/DivisionForm/DivisionFormSkills/DivisionFormSkillsFilters/DivisionFormSkillsFilterSearch';
import {
  DivisionFormSkillsFiltersSort,
  TDivisionFormSkillsFiltersSortProps,
} from '@/components/Division/DivisionForm/DivisionFormSkills/DivisionFormSkillsFilters/DivisionFormSkillsFiltersSort';

type TDivisionFormSkillsFiltersProps = {
  filterProps: TDivisionFormSkillsFilterSearchProps;
  sortProps: TDivisionFormSkillsFiltersSortProps;
};

export const DivisionFormSkillsFilters = ({
  filterProps,
  sortProps,
}: TDivisionFormSkillsFiltersProps) => {
  return (
    <div className={'flex'}>
      <DivisionFormSkillsFilterSearch {...filterProps} />
      <DivisionFormSkillsFiltersSort {...sortProps} />
    </div>
  );
};
