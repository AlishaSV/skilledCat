import { Context } from 'react';
import { useContext as reactUseContext } from 'react';

/**
 * function wraps original useContext function in order to add additional Error for easy debug (unreadable original error)
 * @param providedContext
 */
export const useContext = (providedContext: Context<any>) => {
  const context = reactUseContext(providedContext);

  if (!context) {
    throw new Error(
      `use${providedContext.displayName} should be used only in children of <${providedContext.displayName}.Provider>`,
    );
  }

  return context;
};
