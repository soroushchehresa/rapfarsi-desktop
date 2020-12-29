import { fork, all, takeEvery, put } from 'redux-saga/effects';
import _ from 'lodash';
import { GET_HOME_LISTS, GET_HOME_LISTS_SUCCESS, GET_HOME_LISTS_FAIL } from './redux';
import XHR from '../../utils/xhr';

export function* getHomeLists() {
  yield takeEvery(GET_HOME_LISTS, function* (): any {
    let request = null;
    try {
      request = yield XHR.POST('S', { UI: {}, page: '/' });
    } catch (error) {
      request = null;
    }

    if (_.get(request, 'data')) {
      yield put({ type: GET_HOME_LISTS_SUCCESS, data: _.get(request, 'data', []) });
    } else {
      yield put({ type: GET_HOME_LISTS_FAIL, data: { error: true } });
    }
  });
}

export default function* () {
  yield all([
    fork(getHomeLists)
  ]);
}
