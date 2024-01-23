import { CollapsibleWithTitle } from '@/components/ui/collapsible';
import { ReactNode, useMemo, useState } from 'react';
import { DivisionFormSkillsItem } from './DivisionFormSkillsItem';
import { DivisionFormSkillsFilters } from './DivisionFormSkillsFilters';
import { useGetSkillsQuery } from '@/components/common/graphql/GetSkills.gql';

type TDivisionFormSkillsProps = {
  addedSkills: string[];
  handleAdd: (skillId: string) => void;
  handleRemove: (skillId: string) => void;
};

export const DivisionFormSkills = ({
  addedSkills,
  handleAdd,
  handleRemove,
}: TDivisionFormSkillsProps) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isSortByAdded, setIsSortByAdded] = useState<boolean | null>(null);
  const { data, loading } = useGetSkillsQuery();

  const aggregateByAdded = useMemo(
    () =>
      data?.getSkills.items.reduce(
        (previousValue, currentValue) => {
          /**
           * adds new key value to previousValue
           * where key is current value id and
           * value contains - if current skill (currentValue) is in addedSkills
           */
          previousValue[currentValue.uuid] = addedSkills.some(
            (addedSkillId) => addedSkillId === currentValue.uuid,
          );
          return previousValue;
        },
        {} as { [key: string]: boolean },
      ) ?? {},
    [addedSkills, data],
  );

  return (
    <CollapsibleWithTitle title={'Skills'}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <DivisionFormSkillsFilters
            filterProps={{ searchInput, setSearchInput }}
            sortProps={{ isSortByAdded, setIsSortByAdded, checked: isSortByAdded }}
          />
          <div
            className={
              'flex flex-wrap content-start gap-2 rounded-md border p-4 h-[300px] overflow-scroll'
            }
          >
            {data?.getSkills?.items.reduce((previousValue, currentValue) => {
              let isItemValid: boolean = true;
              const isAdded = aggregateByAdded[currentValue.uuid];

              /**
               * if sortedByAdded != null .
               *        if sortedByAdded === true check if isAdded else !isAdded
               */
              isItemValid = isSortByAdded != null ? (isSortByAdded ? isAdded : !isAdded) : true;

              /**
               * if item is still valid check .
               *    if searchInput exists check if currentValue title contains searchInput
               */
              if (isItemValid) {
                isItemValid = searchInput
                  ? currentValue.title.toLowerCase().includes(searchInput.toLowerCase())
                  : true;
              }

              /**
               * if item still validated convert item into ReactNode and push to all already converted skills
               */
              if (isItemValid) {
                previousValue.push(
                  <DivisionFormSkillsItem
                    key={currentValue.uuid}
                    urlKey={currentValue.urlKey}
                    title={currentValue.title}
                    isAdded={isAdded}
                    handleAdd={() => {
                      handleAdd(currentValue.uuid);
                    }}
                    handleRemove={() => {
                      handleRemove(currentValue.uuid);
                    }}
                  />,
                );
              }

              return previousValue;
            }, [] as ReactNode[])}
          </div>
        </div>
      )}
    </CollapsibleWithTitle>
  );
};
