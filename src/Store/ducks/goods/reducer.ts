import { Good } from 'Types/common';
import { createReducer } from 'typesafe-actions';
import * as actions from './actions';

export interface GoodsState {
  data: Good[];
  loading: boolean;
  error: null | string;
}

const initialState: GoodsState = {
  data: [],
  loading: false,
  error: null,
};

export default createReducer<GoodsState>(initialState)
  .handleAction([actions.fetchGoods.request], state => ({
    ...state,
    loading: true,
  }))
  .handleAction([actions.fetchGoods.success], (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
  }))
  .handleAction([actions.fetchGoods.failure], (state, action) => ({
    ...state,
    error: action.payload,
    loading: false,
  }));
