import cartReducer from '../cartReducer';

const data = [
  {
    productId: 1,
    quantity: 3,
    id: 1,
  },
];

const item = {
  productId: 2,
  quantity: 4,
  id: 2,
};

test('LOAD_CART_SUCCESS', () => {
  expect(
    cartReducer(undefined, {
      type: 'LOAD_CART_SUCCESS',
      payload: data,
    }),
  ).toEqual(data);
});

test('ADD_CART_SUCCESS', () => {
  expect(
    cartReducer(data, {
      type: 'ADD_CART_REQUEST',
      payload: item,
    }),
  ).toEqual([...data, item]);
});

test('ADD_CART_SUCCESS', () => {
  expect(
    cartReducer(data, {
      type: 'ADD_CART_SUCCESS',
      payload: item,
    }),
  ).toEqual([...data, item]);
});

test('UPDATE_CART_SUCCESS', () => {
  expect(
    cartReducer([...data, item], {
      type: 'UPDATE_CART_SUCCESS',
      payload: { ...item, quantity: 10 },
    }),
  ).toEqual([...data, { ...item, quantity: 10 }]);
});

test('DELETE_CART_SUCCESS', () => {
  expect(
    cartReducer([...data, item], {
      type: 'DELETE_CART_SUCCESS',
      payload: item,
    }),
  ).toEqual(data);
});

test('RANDOM_TYPE', () => {
  expect(
    cartReducer(data, {
      type: 'RANDOM_TYPE',
      payload: [],
    }),
  ).toEqual(data);
});
