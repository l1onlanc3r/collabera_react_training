import apiRequest from '../utils/apiRequest';

// note: properties coming from formik Form: values, actions, etc
export const loginAction = (values) => async (dispatch) => {
  await apiRequest({
    type: 'LOGIN',
    apiData: {
      method: 'post',
      url: 'login',
      data: values,
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};

export const registerAction = (values) => async (dispatch) => {
  await apiRequest({
    type: 'REGISTER',
    apiData: {
      method: 'post',
      url: 'register',
      data: values,
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};

export const updatepassAction = (values) => async (dispatch) => {
  try {
    const { confirmPassword, ...data } = values;
    // check if email address exist
    const res = await apiRequest({
      apiData: {
        url: `users?email=${data.email}`,
        method: 'get',
      },
      type: 'CHECK_EMAIL',
      meta: { loadingId: -1 },
      dispatch,
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
        meta: { loadingId: -1 },
        dispatch,
      });

      // then re-register
      apiRequest({
        apiData: {
          url: `register`,
          method: 'post',
          data: { ...res[0], password: data.password },
        },
        type: 'UPDATE_USER',
        meta: { loadingId: -1 },
        dispatch,
      });
    } else {
      throw new Error('Email not found.');
    }
  } catch (error) {
    dispatch({
      type: `UPDATE_USER_FAIL`,
      payload: {
        message: error.message,
        title: 'Update password fail',
      },
      meta: { loadingId: -1 },
    });
  }
};
