import { Dealer } from 'Types/common';
import { createReducer } from 'typesafe-actions';
import * as actions from './actions';

export interface DealerState {
  data: Dealer[];
  loading: boolean;
  error: null | string;
}

const initialState: DealerState = {
  data: [],
  loading: false,
  error: null,
};

export default createReducer<DealerState>(initialState)
  .handleAction([actions.fetchDealers.request], state => ({
    ...state,
    loading: true,
  }))
  .handleAction([actions.fetchDealers.success], (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
  }))
  .handleAction([actions.fetchDealers.failure], (state, action) => ({
    ...state,
    error: action.payload,
    loading: false,
  }));
