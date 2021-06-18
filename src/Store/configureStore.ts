import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducer';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

export default function configureStore(): {
  store: Store;
  persistor: Persistor;
} {
  const store = createStore(persistedReducer, composeWithDevTools());
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
}
