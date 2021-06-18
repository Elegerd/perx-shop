import { call, put, takeLeading } from 'redux-saga/effects';
import hash from 'object-hash';
import * as actions from './actions';
import * as api from 'Services/api';
import { Good } from 'Types/common';

function* fetchGoodsFlow({ payload }: ReturnType<typeof actions.fetchGoods.request>) {
  try {
    const { params } = payload;
    const { data } = yield call(api.getGoods, {
      dealers: params.dealerIds?.join(','),
    });

    const goods = data.map((good: Good) => ({
      ...good,
      id: hash(good),
    }));

    yield put(actions.fetchGoods.success(goods));
  } catch (error) {
    yield put(actions.fetchGoods.failure(error));
  }
}

export default function* goodsSaga() {
  yield takeLeading(actions.fetchGoods.request, fetchGoodsFlow);
}
