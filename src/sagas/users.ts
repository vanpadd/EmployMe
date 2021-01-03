import {takeEvery, takeLatest, call, fork, put, take} from 'redux-saga/effects';
import {Types, UsersActionTypes} from '../actions';
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

function* createUser(action: UsersActionTypes) {
  try {
    if (action.type === Types.CREATE_USER_REQUEST) {
      const result = yield call(api.createUser, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      });
    }
    yield call(getUsers);
  } catch (err) {
    yield put(
      actions.userError({
        error: 'Something went wrong whilst creating a user!',
      }),
    );
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId}: {userId: number}) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (err) {
    yield put(
      actions.userError({
        error: 'Something went wrong whilst deleting a user!',
      }),
    );
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(Types.DELETE_USER_REQUEST);
    yield call(deleteUser, {userId: action.payload.userId});
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
