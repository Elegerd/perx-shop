import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppRoutes } from 'Routes';
import configureStore from 'Store/configureStore';

import 'Assets/styles/index.css';

const { store, persistor } = configureStore();

const App: React.VFC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App;
