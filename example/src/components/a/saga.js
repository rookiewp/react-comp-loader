import { takeLatest } from 'redux-saga/effects'
import * as types from './type';

function* init() {
  yield 'init';
  console.log('a/int')
}

export default function* rootSaga() {
  yield takeLatest(types.init, init)
}