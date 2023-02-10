import React, { useCallback, useEffect, useMemo } from 'react';
import { useProductContext } from '../../contexts/productContext';
import { useCartContext } from '../../contexts/cartContext';
import Product from '../../components/Product';

function Dashboard() {
  // const { logout, user } = useAuthContext();
  const { products, loadProducts, error } = useProductContext();
  const { cart, loadCart } = useCartContext();

  const loadData = useCallback(async () => {
    await Promise.all([loadCart(), loadProducts()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 text-center font-medium w-full p-4">
        {error}
      </div>
    );
  }

  //  const getCartItem = (product) =>
  // useMemo(
  // () =>

  // [cart, product],
  // );

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Dashboard;
