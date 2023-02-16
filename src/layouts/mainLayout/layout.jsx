import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header';
// import { CartProvider } from '../../contexts/cartContext';
// import { ProductProvider } from '../../contexts/productContext';

function MainLayout({ user }) {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div data-testid="main-wrapper">
      <Header />
      <Outlet />
    </div>
  );
}

MainLayout.propTypes = {
  user: PropTypes.shape({}),
};

MainLayout.defaultProps = {
  user: null,
};

export default MainLayout;
