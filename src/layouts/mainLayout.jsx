import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useAuthContext } from '../contexts/authContext';
import { CartProvider } from '../contexts/cartContext';
import { ProductProvider } from '../contexts/productContext';

function MainLayout() {
  const { userState } = useAuthContext();

  if (!userState.user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductProvider>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </ProductProvider>
  );
}

export default MainLayout;
