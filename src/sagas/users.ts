import {takeEvery, call, fork, put} from 'redux-saga/effects';
import {Types} from '../actions';
import * as api from '../api/users';
import * as actions from '../actions';

function* getUsers() {
  try {
    const response = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({items: response.data.data}));
  } catch (err) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
