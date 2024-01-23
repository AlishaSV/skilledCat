'use client';

import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { Table } from '@/components/ui/table';

import { DivisionDataTableHeader } from '@/components/Division/DivisionGrid/divisionDataTable/DivisionDataTableHeader';
import { DivisionDataTableBody } from '@/components/Division/DivisionGrid/divisionDataTable/DivisionDataTableBody';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { DotsThree } from '@phosphor-icons/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DivisionDataTableActionsView } from '@/components/Division/DivisionGrid/divisionDataTable/DivisionDataTableActionsView';
import { SkillsCell } from '@/components/Division/DivisionGrid/divisionDataTable/SkillsCell';
import { DivisionDataTableActionsRemove } from '@/components/Division/DivisionGrid/divisionDataTable/DivisionDataTableActionsRemove';

export type TDivisionGridItem = {
  uuid: string;
  title: string;
  skills: { title: string; urlKey: string }[];
  urlKey: string;
};

export const columns: ColumnDef<TDivisionGridItem>[] = [
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
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'skills',
    header: 'Skills',
    cell: SkillsCell,
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
            <DivisionDataTableActionsView urlKey={row.original.urlKey} />
            <DivisionDataTableActionsRemove uuid={row.original.uuid} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export type TDivisionGridProps = {
  data: TDivisionGridItem[];
  loading: boolean;
};

export function DivisionDataTable<TData, TValue>({ data, loading }: TDivisionGridProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <DivisionDataTableHeader headerGroup={table.getHeaderGroups()} />
        <DivisionDataTableBody
          loading={loading}
          rows={table.getRowModel().rows}
          getDivisionUrlKey={(rowId) => {
            return table.getRow(rowId).original?.urlKey ?? '';
          }}
        />
      </Table>
    </div>
  );
}
