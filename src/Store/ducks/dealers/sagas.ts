import { call, put, takeLeading } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from 'Services/api';

function* fetchDealersFlow({ payload }: ReturnType<typeof actions.fetchDealers.request>) {
  try {
    const { params } = payload;
    const { data } = yield call(api.getDealers, {
      dealer: params.dealerIds?.join(','),
    });

    yield put(actions.fetchDealers.success(data));
  } catch (error) {
    yield put(actions.fetchDealers.failure(error));
  }
}

export default function* driversSaga() {
  yield takeLeading(actions.fetchDealers.request, fetchDealersFlow);
}
