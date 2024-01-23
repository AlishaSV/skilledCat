import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { flexRender, HeaderGroup } from '@tanstack/react-table';
import { TSkillsGridItem } from '@/components/skills/skillsGrid/skillsGridTable/SkillsGridTable';

type TSkillsGridTableHeaderProps = {
  headerGroup: HeaderGroup<TSkillsGridItem>[];
};

export const SkillsGridTableHeader = ({ headerGroup }: TSkillsGridTableHeaderProps) => {
  return (
    <TableHeader>
      {headerGroup.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};
