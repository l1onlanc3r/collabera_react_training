import { call, put } from 'redux-saga/effects';
import axiosInstance from './axiosInstance';

function* apiGenerator({ type, payload, meta }) {
  const match = /(.*)_(REQUEST)/.exec(type);
  const [, actionName] = match;

  // console.log('aciotnName: ', actionName);
  try {
    const res = yield call(axiosInstance, payload);
    yield put({
      type: `${actionName}_SUCCESS`,
      payload: payload.method === 'delete' ? payload.data : res,
      meta,
    });
  } catch (error) {
    yield put({
      type: `${actionName}_FAIL`,
      payload: {
        message: error.message,
        title: `${actionName
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

export default apiGenerator;
