import {takeEvery, call, fork, put} from 'redux-saga/effects';
import {Types} from '../actions';
import * as api from '../api/users';

function* getUsers() {
  try {
    const response = yield call(api.getUsers);
    console.log(response);
  } catch (err) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
