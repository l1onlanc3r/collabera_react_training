import apiRequest from '../utils/apiRequest';

export const loadProductsAction = () => async (dispatch) => {
  await apiRequest({
    apiData: {
      url: '660/products',
      method: 'get',
    },
    type: 'LOAD_PRODUCTS',
    meta: { loadingId: -1 },
    dispatch,
  });
};

export const a = 1;
