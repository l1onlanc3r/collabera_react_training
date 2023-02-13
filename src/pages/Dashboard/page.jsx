import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../../components/Product';

function Dashboard({ products, loading, loadProducts, loadCart }) {
  const loadData = useCallback(async () => {
    await Promise.all([loadProducts(), loadCart()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
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
};

export default Dashboard;
