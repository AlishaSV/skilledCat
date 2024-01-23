import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { flexRender, Row } from '@tanstack/react-table';
import { Loader2 } from 'lucide-react';
import {
  columns,
  TDivisionGridItem,
} from '@/components/Division/DivisionGrid/divisionDataTable/DivisionDataTable';

export type TDivisionDataTableBodyProps = {
  rows: Row<TDivisionGridItem>[];
  loading: boolean;
  getDivisionUrlKey: (rowId: string) => string;
};

export const DivisionDataTableBody = ({
  rows,
  loading,
  getDivisionUrlKey,
}: TDivisionDataTableBodyProps) => {
  return (
    <TableBody>
      {rows?.length ? (
        rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map((cell) => {
              const urlKey = getDivisionUrlKey(row.id);

              return (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            {loading ? (
              <div className={'flex justify-center'}>
                <Loader2 size={48} strokeWidth={0.5} className="animate-spin text-pink-300" />
              </div>
            ) : (
              <>No results.</>
            )}
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
