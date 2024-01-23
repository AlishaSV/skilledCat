import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { DivisionFormSkillsItemAlertDialogContent } from './DivisionFormSkillsItemAlertDialogContent';

type TDivisionFormSkillsItemProps = {
  isAdded: boolean;
  title: string;
  urlKey: string;
  handleAdd?: () => void;
  handleRemove?: () => void;
};

export const DivisionFormSkillsItem = ({
  isAdded,
  title,
  urlKey,
  handleAdd,
  handleRemove,
}: TDivisionFormSkillsItemProps) => {
  const circleSize = 14;

  return (
    <TooltipProvider delayDuration={10}>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={`/skill/${urlKey}`}
            className={`p-1 rounded-lg shadow-sm ${
              isAdded ? 'shadow-green-300' : 'shadow-gray-300'
            }`}
          >
            {title}
          </Link>
        </TooltipTrigger>

        <AlertDialog>
          <TooltipContent className={'p-0.5'} side={'top'} align={'end'} sideOffset={-4}>
            {isAdded ? (
              <AlertDialogTrigger>
                <MinusCircle size={circleSize} color={'red'} />
              </AlertDialogTrigger>
            ) : (
              <PlusCircle
                onClick={() => {
                  handleAdd && handleAdd();
                }}
                className={'text-green-300'}
                size={circleSize}
              />
            )}
          </TooltipContent>
          <DivisionFormSkillsItemAlertDialogContent
            title={`You ya sugar thats wonna dulit ${title}?`}
            handleRemove={handleRemove}
            approveButton={<>Yavol meine fuhrer, delete {title}</>}
            cancelButton={<>Nein, I am just volokhata mavpa </>}
          />
        </AlertDialog>
      </Tooltip>
    </TooltipProvider>
  );
};
