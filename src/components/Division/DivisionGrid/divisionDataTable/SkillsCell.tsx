import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { MinusCircle } from 'lucide-react';
import { CellContext } from '@tanstack/table-core';
import { TDivisionGridItem } from '@/components/Division/DivisionGrid/divisionDataTable/index';

export const SkillsCell = ({ row }: CellContext<TDivisionGridItem, unknown>) => {
  return (
    <div className={'flex gap-2'}>
      {row.original.skills.map((item) => (
        <TooltipProvider key={item.urlKey} delayDuration={10}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={`/skill/${item.urlKey}`}
                className={'border-b-blue-700 border-2 rounded-lg p-0.5'}
              >
                {item.title}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={'p-0.5'} side={'top'} align={'end'} sideOffset={-5}>
              <MinusCircle size={14} color={'red'} />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};
