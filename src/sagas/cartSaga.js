import {
  all,
  // call,
  fork,
  // put,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';
// import axiosInstance from '../utils/axiosInstance';

/*
function* loadCart({ meta }) {
  try {
    console.log('load cart called');
    const res = call(axiosInstance.get, '660/cart');
    yield put({ type: 'LOAD_CART_SUCCESS', payload: res, meta });
  } catch (error) {
    yield put({ type: 'LOAD_CART_FAIL', payload: error, meta });
  }
}

function* addCart({ payload, meta }) {
  try {
    const res = call(axiosInstance.post, '660/cart', payload);
    yield put({ type: 'ADD_CART_SUCCESS', payload: res, meta });
  } catch (error) {
    yield put({ type: 'ADD_CART_FAIL', payload: error, meta });
  }
}

function* updateCart({ payload, meta }) {
  try {
    const res = call(axiosInstance.put, `660/cart/${payload.id}`);
    yield put({ type: 'UPDATE_CART_SUCCESS', payload: res, meta });
  } catch (error) {
    yield put({ type: 'UPDATE_CART_FAIL', payload: error, meta });
  }
}

function* deleteCart({ payload, meta }) {
  try {
    call(axiosInstance.delete, `660/cart/${payload.id}`);
    yield put({ type: 'DELETE_CART_SUCCESS', payload, meta });
  } catch (error) {
    yield put({ type: 'DELETE_CART_FAIL', payload: error, meta });
  }
}
*/

function* loadCartRequest() {
  yield takeEvery('LOAD_CART_REQUEST', apiGenerator);
}

function* addCartRequest() {
  yield takeLatest('ADD_CART_REQUEST', apiGenerator);
}

function* updateCartRequest() {
  yield takeLatest('UPDATE_CART_REQUEST', apiGenerator);
}

function* deleteCartRequest() {
  yield takeLeading('DELETE_CART_REQUEST', apiGenerator);
}

export default function* cartSaga() {
  yield all([
    fork(loadCartRequest),
    fork(addCartRequest),
    fork(updateCartRequest),
    fork(deleteCartRequest),
  ]);
}
