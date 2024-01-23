import { useRouter } from 'next/navigation';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

type TDivisionDataTableActions = {
  urlKey: string;
};
export const DivisionDataTableActionsView = ({ urlKey }: TDivisionDataTableActions) => {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={(data) => {
        return router.push(`/division/${urlKey}`);
      }}
    >
      View division
    </DropdownMenuItem>
  );
};
