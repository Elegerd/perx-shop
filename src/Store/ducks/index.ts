import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { goodsReducer, goodsActions, goodsSaga, goodsSelectors } from './goods';
import { basketReducer, basketActions, basketSelectors } from './basket';

export function* rootSaga() {
  yield all([goodsSaga()]);
}

export const rootReducer = combineReducers({
  goods: goodsReducer,
  basket: basketReducer,
});

export const rootActions = {
  goods: goodsActions,
  basket: basketActions,
};

export const rootSelectors = {
  goods: goodsSelectors,
  basket: basketSelectors,
};
