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

function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', apiGenerator);
}

function* registerRequest() {
  yield takeLatest('REGISTER_REQUEST', register);
}

export default function* rootAuthSaga() {
  yield all([fork(loginRequest), fork(registerRequest)]);
}
