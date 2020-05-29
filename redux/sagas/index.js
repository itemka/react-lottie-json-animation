import { all, fork } from 'redux-saga/effects';
// TODO import * as test from './test';

export default function* rootSaga() {
  yield all([
    // TODO ...Object.values(test),
  ].map(fork));
}
