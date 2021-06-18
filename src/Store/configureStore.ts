import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, rootSaga } from './ducks';
import { Persistor, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(): {
  store: Store;
  persistor: Persistor;
} {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {
    store,
    persistor,
  };
}
