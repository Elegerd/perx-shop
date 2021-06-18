import { Good } from 'Types/common';
import { createAction } from 'typesafe-actions';

export const addToBasket = createAction('BASKET/ADD_TO_BASKET')<Good>();

export const removeFromBasket = createAction('BASKET/REMOVE_FROM_BASKET')<string>();

export const clearBasket = createAction('BASKET/CLEAR_BASKET')();
