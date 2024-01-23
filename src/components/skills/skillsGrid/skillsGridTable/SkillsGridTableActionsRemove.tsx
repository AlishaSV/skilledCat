import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useRemoveSkillMutation } from '@/components/skills/graphql/RemoveSkill.gql';
import { useSkillsGridContext } from '@/components/skills/skillsGrid/SkillsGridContext';

type TSkillsGridTableActionsRemove = {
  uuid: string;
};
export const SkillsGridTableActionsRemove = ({ uuid }: TSkillsGridTableActionsRemove) => {
  const [removeSkillMutation] = useRemoveSkillMutation();
  const { refetch } = useSkillsGridContext();
  return (
    <DropdownMenuItem
      onClick={(data) =>
        removeSkillMutation({ variables: { skill_uuid: uuid } }).then((result) => {
          if (result.data?.removeSkill) {
            refetch();
          }
        })
      }
    >
      Remove skill
    </DropdownMenuItem>
  );
};
