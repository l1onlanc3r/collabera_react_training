import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    try {
      const res = await axiosInstance.get('660/products');
      setProducts(res);
    } catch (err) {
      setError(err.message);
    }
  });

  const value = useMemo(
    () => ({
      loadProducts,
      products,
      error,
    }),
    [loadProducts, products, error],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProductContext = () => useContext(ProductContext);
