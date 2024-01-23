import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

type TSkillsGridTableActionsView = {
  urlKey: string;
};
export const SkillsGridTableActionsView = ({ urlKey }: TSkillsGridTableActionsView) => {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={(data) => {
        router.push(`/skill/${urlKey}`);
      }}
    >
      View skill
    </DropdownMenuItem>
  );
};
