import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useEffect,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';
import { authInitialValue, authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userState, dispatch] = useReducer(authReducer, authInitialValue);

  const apiRequest = useCallback(async ({ apiData, type, actions }) => {
    try {
      dispatch({ type: `${type}_REQUEST` });
      const res = await axiosInstance(apiData);
      dispatch({ type: `${type}_SUCCESS`, payload: res });

      switch (type) {
        case 'CHECK_EMAIL':
          return res;
        case 'UPDATE_USER':
          window.location.replace('/auth');
          break;
        default:
          actions.resetForm();
          localStorage.setItem('token', JSON.stringify(res));
      }
    } catch (err) {
      dispatch({ type: `${type}_FAIL`, payload: err });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({ type: 'LOAD_USER', payload: JSON.parse(token) });
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    apiRequest({
      apiData: {
        url: 'login',
        method: 'post',
        data: values,
      },
      type: 'LOGIN',
      actions,
    });
  }, []);

  const register = useCallback(async (values, actions) => {
    const { confirmPassword, ...data } = values;

    apiRequest({
      apiData: {
        url: 'register',
        method: 'post',
        data,
      },
      type: 'REGISTER',
      actions,
    });
  }, []);

  const updatepass = useCallback(async (values, actions) => {
    try {
      const { confirmPassword, ...data } = values;
      // check if email address exist
      const res = await apiRequest({
        apiData: {
          url: `users?email=${data.email}`,
          method: 'get',
        },
        type: 'CHECK_EMAIL',
        actions,
      });

      // check if something is returned
      if (res.length > 0) {
        // update

        console.log('email valid');

        // delete user
        await apiRequest({
          apiData: {
            url: `users/${res[0].id}`,
            method: 'delete',
          },
          type: 'UPDATE_USER',
          actions,
        });

        // then re-register
        apiRequest({
          apiData: {
            url: `register`,
            method: 'post',
            data: { ...res[0], password: data.password },
          },
          type: 'UPDATE_USER',
          actions,
        });
      } else {
        throw new Error('Email not found.');
      }
    } catch (error) {
      dispatch({ type: `UPDATE_USER_FAIL`, payload: error });
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    dispatch({ type: 'LOGOUT_USER', payload: null });
  }, []);

  const value = useMemo(
    () => ({
      login,
      register,
      logout,
      updatepass,
      userState,
    }),
    [login, register, logout, updatepass, userState],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
