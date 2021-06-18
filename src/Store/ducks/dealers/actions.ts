import { Dealer } from 'Types/common';
import { createAsyncAction } from 'typesafe-actions';

export interface DealersParams {
  dealerIds?: string[];
}

export const fetchDealers = createAsyncAction(
  'DEALERS/FETCH_DEALERS_REQUEST',
  'DEALERS/FETCH_DEALERS_SUCCESS',
  'DEALERS/FETCH_DEALERS_FAILURE',
)<{ params: DealersParams }, Dealer[], Error>();
