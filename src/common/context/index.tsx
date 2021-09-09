import React, { createContext, FC, useContext } from 'react';

// Initially empty context
type Context = {
};

const AppContext = createContext<Context | null>(null);

// State
import { RecoilRoot } from 'recoil';

export const useAppContext = (): Context => {
  return useContext(AppContext)!;
};

export const AppProvider: FC<{}> = ({ children }) => {
  const initialContext: Context = { };
  return (
    <AppContext.Provider value={initialContext}>
      <RecoilRoot>{children}</RecoilRoot>
    </AppContext.Provider>
  );
};
