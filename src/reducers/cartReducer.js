export const cartInitialValue = [];

export default (state = cartInitialValue, { type, payload }) => {
  console.log('CART REDUCER:');
  console.log('state:', state);
  console.log('type:', type);
  console.log('payload:', payload);

  switch (type) {
    case 'LOAD_CART_SUCCESS':
      return payload;

    case 'ADD_CART_SUCCESS':
      return [...state, payload];

    case 'UPDATE_CART_SUCCESS': {
      const index = state.findIndex((x) => x.id === payload.id);
      return [...state.slice(0, index), payload, ...state.slice(index + 1)];
    }

    case 'DELETE_CART_SUCCESS': {
      const index = state.findIndex((x) => x.id === payload.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
