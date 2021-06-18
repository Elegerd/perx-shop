import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppRoutes } from 'Routes';
import configureStore from 'Store/configureStore';

import 'Assets/css/index.css';

const { store, persistor } = configureStore();

interface Props {
  dealerIds?: string[];
}

export const Context = createContext<Props>({});

const App: React.VFC<Props> = ({ dealerIds }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Context.Provider value={{ dealerIds }}>
          <AppRoutes />
        </Context.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
