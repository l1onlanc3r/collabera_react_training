import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Errors from '../../components/Errors';

function BaseLayout({ loadUser }) {
  loadUser();

  return (
    <>
      <Outlet />
      <Errors />
    </>
  );
}

BaseLayout.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default BaseLayout;
