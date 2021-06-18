import { Good } from 'Types/common';
import { createReducer } from 'typesafe-actions';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import * as actions from './actions';
import { omit } from 'lodash';

export type BasketState = {
  data: {
    [k: string]: {
      good: Good;
      count: number;
    };
  };
};

const initialState: BasketState = {
  data: {},
};

const basketPersistConfig = {
  key: 'basket',
  storage,
};

const basketReducer = createReducer<BasketState>(initialState)
  .handleAction([actions.clearBasket], () => initialState)
  .handleAction([actions.addToBasket], (state: BasketState, action) => {
    const good: Good = action.payload;
    const data = state.data;
    if (!data[good.id])
      return {
        ...state,
        data: {
          ...data,
          [good.id]: {
            good,
            count: 1,
          },
        },
      };
    return {
      ...state,
      data: {
        ...data,
        [good.id]: {
          ...data[good.id],
          count: ++data[good.id].count,
        },
      },
    };
  })
  .handleAction([actions.removeFromBasket], (state: BasketState, action) => {
    const goodId: string = action.payload;
    const data = state.data;
    const selectedGood = data[goodId];
    if (!selectedGood) return state;
    if (selectedGood.count < 2) {
      return {
        ...state,
        data: omit(data, goodId),
      };
    }
    return {
      ...state,
      data: {
        ...data,
        [goodId]: {
          ...selectedGood,
          count: --selectedGood.count,
        },
      },
    };
  });

export default persistReducer<BasketState>(basketPersistConfig, basketReducer);
