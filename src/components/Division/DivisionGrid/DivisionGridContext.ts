import { createContext } from 'react';
import { useContext } from '@/lib/useContext';

type TDivisionGridContext = {
  refetch: () => void;
};

export const DivisionGridContext = createContext<TDivisionGridContext | null>(null);
DivisionGridContext.displayName = 'DivisionGridContext';

export const useDivisionGridContext = (): TDivisionGridContext => {
  return useContext(DivisionGridContext);
};
