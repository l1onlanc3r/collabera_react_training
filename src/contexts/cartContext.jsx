import React, {
  createContext,
  useContext,
  useCallback,
  useReducer,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import cartReducer, { cartInitialValue } from '../reducers/cartReducer';
import { useLoadingContext } from './loadingContext';
import { useErrorContext } from './errorContext';
import useApiRequest from '../hooks/useApiRequest';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialValue);
  const { dispatchLoading } = useLoadingContext();
  const { dispatchErrors } = useErrorContext();
  const apiRequest = useApiRequest({
    dispatch,
    dispatchLoading,
    dispatchErrors,
  });

  const loadCart = useCallback(async () => {
    apiRequest({
      apiData: {
        url: '660/cart',
        method: 'get',
      },
      type: 'LOAD_CART',
    });
  }, [apiRequest]);

  const addToCart = useCallback(
    async (data) => {
      apiRequest({
        apiData: {
          url: '660/cart',
          method: 'post',
          data,
        },
        type: 'ADD_CART',
      });
    },
    [apiRequest],
  );

  const updateCartItem = useCallback(
    async (data) => {
      apiRequest({
        apiData: {
          url: `660/cart/${data.id}`,
          method: 'put',
          data,
        },
        type: 'UPDATE_CART',
      });
    },
    [apiRequest],
  );

  const deleteCartItem = useCallback(
    async (data) => {
      apiRequest({
        apiData: {
          url: `660/cart/${data.id}`,
          method: 'delete',
          data,
        },
        type: 'DELETE_CART',
      });
    },
    [apiRequest],
  );

  const value = useMemo(
    () => ({
      loadCart,
      addToCart,
      updateCartItem,
      deleteCartItem,
      cart,
    }),
    [loadCart, addToCart, updateCartItem, deleteCartItem, cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCartContext = () => useContext(CartContext);
