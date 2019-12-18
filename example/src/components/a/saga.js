import { takeLatest, put } from 'redux-saga/effects'
import * as types from './type';
import { doChangeData } from './action';

function* async() {
  const data = yield new Promise((r) => {
    setTimeout(() => {
      r('async')
    }, 2000)
  });
  yield put(doChangeData({ name: data }))
}

export default function* rootSaga() {
  yield takeLatest(types.async, async)
}