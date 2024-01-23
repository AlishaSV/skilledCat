import { Table } from '@/components/ui/table';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { SkillsGridTableHeader } from '@/components/skills/skillsGrid/skillsGridTable/SkillsGridTableHeader';
import { SkillsGridTableBody } from '@/components/skills/skillsGrid/skillsGridTable/SkillsGridTableBody';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { DotsThree } from '@phosphor-icons/react';
import { SkillsGridTableActionsView } from '@/components/skills/skillsGrid/skillsGridTable/SkillsGridTableActionsView';
import { SkillsGridTableActionsRemove } from '@/components/skills/skillsGrid/skillsGridTable/SkillsGridTableActionsRemove';

export type TSkillsGridItem = {
  uuid: string;
  name: string;
  urlKey: string;
};

export const columns: ColumnDef<TSkillsGridItem>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsThree size={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <SkillsGridTableActionsView urlKey={row.original.urlKey} />
            <SkillsGridTableActionsRemove uuid={row.original.uuid} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

type TSkillsGridTableProps = {
  data: TSkillsGridItem[];
  loading: boolean;
};

export const SkillsGridTable = ({ data, loading }: TSkillsGridTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <SkillsGridTableHeader headerGroup={table.getHeaderGroups()} />
      <SkillsGridTableBody
        getSkillUrlKey={(rowId) => table.getRow(rowId).original.urlKey}
        columnsLength={columns.length}
        rows={table.getRowModel().rows}
        loading={loading}
      />
    </Table>
  );
};
