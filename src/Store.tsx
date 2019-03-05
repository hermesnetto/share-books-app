import * as React from 'react';

import reducer, { initialState, State } from './store/reducer';
import { Action } from './store/actions';

interface Context {
  state: State;
  dispatch: React.Dispatch<Action>;
}

interface ProviderProps {}

const Store = React.createContext<Context>({
  state: initialState,
  dispatch: () => undefined
});

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export { Store, Provider };
