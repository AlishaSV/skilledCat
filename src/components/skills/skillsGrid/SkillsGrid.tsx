'use client';

import { SkillsGridTable, TSkillsGridItem } from './skillsGridTable';
import { useGetSkillsQuery } from '@/components/common/graphql/GetSkills.gql';
import { SkillsGridContext } from '@/components/skills/skillsGrid/SkillsGridContext';

export const SkillsGrid = () => {
  const { data, loading, refetch } = useGetSkillsQuery();

  return (
    <div className="rounded-md border">
      <SkillsGridContext.Provider
        value={{
          refetch: () => {
            refetch();
          },
        }}
      >
        <SkillsGridTable
          loading={loading}
          data={
            data?.getSkills?.items.map((item) => {
              const newItems: TSkillsGridItem = {
                ...item,
                name: item.title,
              };
              return newItems;
            }) ?? []
          }
        />
      </SkillsGridContext.Provider>
    </div>
  );
};
