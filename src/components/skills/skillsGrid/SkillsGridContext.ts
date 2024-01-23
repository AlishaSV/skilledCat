import { createContext } from 'react';
import { useContext } from '@/lib/useContext';

type TSkillsGridContext = {
  refetch: () => void;
};
export const SkillsGridContext = createContext<TSkillsGridContext | null>(null);
SkillsGridContext.displayName = 'SkillsGridContext';

export const useSkillsGridContext = (): TSkillsGridContext => {
  return useContext(SkillsGridContext);
};
