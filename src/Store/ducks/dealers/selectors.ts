import { DealerState } from './reducer';

export const selectDealers = state => {
  const dealers: DealerState = state.dealers;
  return dealers.data;
};

export const selectIsLoadingDealers = state => {
  const dealers: DealerState = state.dealers;
  return dealers.loading;
};
