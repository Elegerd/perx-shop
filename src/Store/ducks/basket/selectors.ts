import { BasketState } from './reducer';

export const selectBasket = state => {
  const basket: BasketState = state.basket;
  return basket.data;
};

export const selectGetTotal = state => {
  const basket: BasketState = state.basket;
  return Object.values(basket.data).reduce(
    (acc, cur) => acc + cur.good.price * cur.count,
    0,
  );
};

export const selectGetCount = state => {
  const basket: BasketState = state.basket;
  return Object.values(basket.data).reduce((acc, cur) => acc + cur.count, 0);
};
