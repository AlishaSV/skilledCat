import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { flexRender, Row } from '@tanstack/react-table';
import { Loader2 } from 'lucide-react';
import { TSkillsGridItem } from '@/components/skills/skillsGrid/skillsGridTable/SkillsGridTable';

type TSkillsGridTableBodyProps = {
  rows: Row<TSkillsGridItem>[];
  getSkillUrlKey: (rowId: string) => string;
  loading: boolean;
  columnsLength: number;
};

export const SkillsGridTableBody = ({
  rows,
  loading,
  getSkillUrlKey,
  columnsLength,
}: TSkillsGridTableBodyProps) => {
  return (
    <TableBody>
      {rows?.length ? (
        rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map((cell) => {
              const urlKey = getSkillUrlKey(row.id);

              return (
                <TableCell className={'w-fit'} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columnsLength} className="h-24 text-center">
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
