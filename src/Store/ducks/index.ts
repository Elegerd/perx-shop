import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { dealerReducer, dealerActions, dealerSaga, dealerSelectors } from './dealers';

export function* rootSaga() {
  yield all([dealerSaga()]);
}

export const rootReducer = combineReducers({
  dealers: dealerReducer,
});

export const rootActions = {
  dealers: dealerActions,
};

export const rootSelectors = {
  dealers: dealerSelectors,
};
