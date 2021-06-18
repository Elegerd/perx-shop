import { Good } from 'Types/common';
import { createAsyncAction } from 'typesafe-actions';

export interface GoodsParams {
  dealerIds?: string[];
}

export const fetchGoods = createAsyncAction(
  'GOODS/FETCH_GOODS_REQUEST',
  'GOODS/FETCH_GOODS_SUCCESS',
  'GOODS/FETCH_GOODS_FAILURE',
)<{ params: GoodsParams }, Good[], Error>();
