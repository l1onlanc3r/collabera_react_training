import userReducer, { initialState } from '../userReducer';
import localStorageMock from '../../utils/localStorageMock';

// Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const data = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpb25sYW5jZXJAZ21haWwuY29tcyIsImlhdCI6MTY3NjM2NDYzNSwiZXhwIjoxNjc2MzY4MjM1LCJzdWIiOiIyIn0.WEFbDUv8pOTvXMiYongpHmiMMi4mwfQh_N_yFxWNyDU',
  user: {
    email: 'lionlancer@gmail.com',
    password: '$2a$10$27mPxPobUS2xHXf83dWsuOwpkZNp0ydjd7LpMgN5eaNmpyuqYm8XC',
    name: 'Sherwin',
    gender: 'male',
    hobbies: ['football', 'volleyball'],
    id: 1,
  },
};

const meta = { loadingId: -1 };

describe('Check User Session from LocalStorage', () => {
  // beforeEach(() => {
  //  localStorage.clear();
  // });

  test('LOGIN_SUCCESS', () => {
    expect(
      userReducer(undefined, {
        type: 'LOGIN_SUCCESS',
        payload: data,
        meta,
      }),
    ).toEqual({ ...initialState, ...data });
  });

  test('LOAD_USER from localstorage', () => {
    expect(
      userReducer(undefined, {
        type: 'LOAD_USER',
      }),
    ).toEqual(data);
  });

  // window.localStorage.clear();
  test('LOAD_USER from empty localstorage', () => {
    expect(
      userReducer(undefined, {
        type: 'LOAD_USER',
      }),
    ).toEqual(initialState);
  });

  test('LOGOUT', () => {
    expect(
      userReducer(undefined, {
        type: 'LOGOUT',
      }),
    ).toEqual(initialState);
  });

  test('RANDOM_TYPE', () => {
    expect(
      userReducer(initialState, {
        type: 'RANDOM_TYPE',
        payload: [],
      }),
    ).toEqual(initialState);
  });
});
