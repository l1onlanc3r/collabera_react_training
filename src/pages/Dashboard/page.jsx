import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../../components/Product';

function Dashboard({ products, loading, loadProducts, loadCart, hasError }) {
  const loadData = useCallback(async () => {
    await Promise.all([loadProducts(), loadCart()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (hasError) {
    return <h1 data-testid="error">Something went wrong...</h1>;
  }

  return (
    <div data-testid="products-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

Dashboard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
  loadProducts: PropTypes.func.isRequired,
  loadCart: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default Dashboard;
