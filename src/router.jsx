import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import AuthLayout from './layouts/authLayout';
import BaseLayout from './layouts/baseLayout';
import MainLayout from './layouts/mainLayout';
import Dashboard from './pages/Dashboard';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="changepass" element={<ForgotPassword />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

/*
<Route path="/" element={<BaseLayout />}>
      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
*/
