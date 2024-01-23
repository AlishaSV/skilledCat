import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useRemoveDivisionMutation } from '@/components/Division/graphql/RemoveDivision.gql';
import { useDivisionGridContext } from '@/components/Division/DivisionGrid/DivisionGridContext';

type TDivisionDataTableActionsRemove = {
  uuid: string;
};

export const DivisionDataTableActionsRemove = ({ uuid }: TDivisionDataTableActionsRemove) => {
  const [removeDivisionMutation] = useRemoveDivisionMutation();
  const { refetch } = useDivisionGridContext();
  return (
    <DropdownMenuItem
      onClick={(data) => {
        removeDivisionMutation({ variables: { division_uuid: uuid } }).then((result) => {
          if (result.data?.removeDivision) {
            refetch();
          }
        });
      }}
    >
      Remove division
    </DropdownMenuItem>
  );
};
