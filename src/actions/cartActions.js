import apiRequest from '../utils/apiRequest';

export const loadCartAction = () => async (dispatch) => {
  await apiRequest({
    apiData: {
      url: '660/cart',
      method: 'get',
    },
    type: 'LOAD_CART',
    meta: { loadingId: -1 },
    dispatch,
  });
};

export const addToCartAction = (data) => async (dispatch) => {
  await apiRequest({
    apiData: {
      url: '660/cart',
      method: 'post',
      data,
    },
    type: 'ADD_CART',
    meta: { loadingId: data.productId },
    dispatch,
  });
};

export const updateCartItemAction = (data) => async (dispatch) => {
  await apiRequest({
    apiData: {
      url: `660/cart/${data.id}`,
      method: 'put',
      data,
    },
    type: 'UPDATE_CART',
    meta: { loadingId: data.productId },
    dispatch,
  });
};

export const deleteCartItemAction = (data) => async (dispatch) => {
  await apiRequest({
    apiData: {
      url: `660/cart/${data.id}`,
      method: 'delete',
      data,
    },
    type: 'DELETE_CART',
    meta: { loadingId: data.productId },
    dispatch,
  });
};
