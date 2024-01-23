import { Input } from '@/components/ui/input';
import { Dispatch, SetStateAction } from 'react';

export type TDivisionFormSkillsFilterSearchProps = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
};

export const DivisionFormSkillsFilterSearch = ({
  setSearchInput,
  searchInput,
}: TDivisionFormSkillsFilterSearchProps) => {
  return (
    <Input
      value={searchInput}
      onChange={(event) => {
        setSearchInput(event.target.value);
      }}
      className={'m-2 h-[40px] w-[300px]'}
      placeholder={'search'}
    />
  );
};
