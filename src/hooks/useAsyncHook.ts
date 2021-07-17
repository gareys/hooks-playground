import { DependencyList, useEffect } from 'react';

export const useAsyncHook = (
  callback: () => Promise<void>,
  deps: DependencyList
) => {
  useEffect(() => {
    callback().catch((err: any) => {
      console.error(err);
      throw err;
    });
  }, deps);
};
