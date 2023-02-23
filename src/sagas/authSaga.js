import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';
import axiosInstance from '../utils/axiosInstance';

/*
function* login({ payload, meta }) {
  try {
    const res = yield call(axiosInstance, {
      method: 'POST',
      url: 'login',
      data: payload,
    });

    yield put({
      type: 'LOGIN_SUCCESS',
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: 'LOGIN_FAIL',
      payload: error,
      meta,
    });
  }
}
*/

function* register({ payload, meta }) {
  try {
    const res = yield call(axiosInstance, {
      method: 'POST',
      url: 'register',
      data: payload,
    });

    yield put({
      type: 'REGISTER_SUCCESS',
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: 'REGISTER_FAIL',
      payload: error,
      meta,
    });
  }
}

function* updatepass({ payload, meta }) {
  try {
    const { confirmPassword, ...data } = payload.data;

    // check if email address exist
    const res = yield call(axiosInstance, {
      method: 'GET',
      url: `users?email=${data.email}`,
      data: payload.data,
    });

    // check if something is returned
    if (res.length > 0) {
      // update

      yield put({
        type: 'CHECK_EMAIL_SUCCESS',
        payload: res,
        meta,
      });

      // delete user
      const res2 = yield call(axiosInstance, {
        method: 'DELETE',
        url: `users/${res[0].id}`,
      });

      yield put({
        type: 'DELETE_USER_SUCCESS',
        meta,
      });

      yield call(axiosInstance, {
        method: 'POST',
        url: `register`,
        data: { ...res[0], password: data.password },
      });

      yield put({
        type: 'UPDATE_USER_SUCCESS',
        meta,
      });
    } else {
      throw new Error('Email not found.');
    }
  } catch (error) {
    yield put({
      type: `${payload.type}_FAIL`,
      payload: {
        message: error.message,
        title: `${payload.type
          .split('_')
          .map((x, i) => {
            if (i === 0) {
              return `${x[0].toUpperCase()}${x.slice(1).toLocaleLowerCase()}`;
            }
            return x.toLocaleLowerCase();
          })
          .join(' ')} fail`,
      },
      meta,
    });
  }
}

function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', apiGenerator);
}

function* registerRequest() {
  yield takeLatest('REGISTER_REQUEST', register);
}

function* updatepassRequest() {
  yield takeLatest('UPDATE_PASS_REQUEST', updatepass);
}

export default function* authSaga() {
  yield all([
    fork(loginRequest),
    fork(registerRequest),
    fork(updatepassRequest),
  ]);
}
