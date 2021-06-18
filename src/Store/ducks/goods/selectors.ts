import { GoodsState } from './reducer';

export const selectGoods = state => {
  const goods: GoodsState = state.goods;
  return goods.data;
};

export const selectIsLoadingGoods = state => {
  const goods: GoodsState = state.goods;
  return goods.loading;
};
