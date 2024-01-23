'use client';

import { DivisionDataTable, TDivisionGridItem } from './divisionDataTable';
import { useGetDivisionsQuery } from '@/components/Division/DivisionGrid/GetDivisions.gql';
import { DivisionGridContext } from '@/components/Division/DivisionGrid/DivisionGridContext';

export const DivisionGrid = () => {
  const { data, loading, refetch } = useGetDivisionsQuery();
  return (
    <div>
      <DivisionGridContext.Provider
        value={{
          refetch: () => {
            refetch();
          },
        }}
      >
        <DivisionDataTable
          data={
            data?.getDivisions?.items.map((item) => {
              const newDivision: TDivisionGridItem = {
                title: item.title,
                uuid: item.uuid,
                urlKey: item.urlKey,
                skills: item.skills?.items.map((skill) => ({ ...skill })) ?? [],
              };

              return newDivision;
            }) ?? []
          }
          loading={loading}
        />
      </DivisionGridContext.Provider>
    </div>
  );
};
