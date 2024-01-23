import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { flexRender, HeaderGroup } from '@tanstack/react-table';
import { TDivisionGridItem } from '@/components/Division/DivisionGrid/divisionDataTable/DivisionDataTable';

export type DivisionDataTableHeaderProps = {
  headerGroup: HeaderGroup<TDivisionGridItem>[];
};

export const DivisionDataTableHeader = ({ headerGroup }: DivisionDataTableHeaderProps) => {
  return (
    <TableHeader>
      {headerGroup.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};
