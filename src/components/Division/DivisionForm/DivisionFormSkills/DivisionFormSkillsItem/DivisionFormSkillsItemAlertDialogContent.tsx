import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { PropsWithChildren, ReactNode } from 'react';

type TDivisionFormSkillsItemAlertDialogContentProps = PropsWithChildren & {
  cancelButton: ReactNode;
  approveButton: ReactNode;
  title: string;
  handleRemove?: () => void;
};

export const DivisionFormSkillsItemAlertDialogContent = ({
  cancelButton,
  approveButton,
  title,
  children,
  handleRemove,
}: TDivisionFormSkillsItemAlertDialogContentProps) => {
  return (
    <AlertDialogContent className={'max-w-fit '}>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>Nema descripshina</AlertDialogDescription>
      </AlertDialogHeader>
      {children}
      <AlertDialogFooter>
        <AlertDialogCancel>{cancelButton}</AlertDialogCancel>
        <AlertDialogAction
          onClick={() => {
            handleRemove && handleRemove();
          }}
        >
          {approveButton}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
