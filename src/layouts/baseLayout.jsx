import React from 'react';
import { Outlet } from 'react-router-dom';
import Errors from '../components/Errors';
import { AuthProvider } from '../contexts/authContext';
import { ErrorProvider } from '../contexts/errorContext';
import { LoadingProvider } from '../contexts/loadingContext';

function BaseLayout() {
  return (
    <LoadingProvider>
      <ErrorProvider>
        <AuthProvider>
          <Outlet />
          <Errors />
        </AuthProvider>
      </ErrorProvider>
    </LoadingProvider>
  );
}

export default BaseLayout;
