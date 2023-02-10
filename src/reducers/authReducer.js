export const authInitialValue = {
  loading: false,
  user: null,
  error: '',
};

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_USER':
    case 'LOGOUT_USER':
      return { ...state, user: payload };

    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'CHECK_EMAIL_REQUEST':
    case 'UPDATE_USER_REQUEST':
      return { ...state, loading: true };

    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS': {
      return { ...state, loading: false, user: payload };
    }

    case 'CHECK_EMAIL_SUCCESS':
    case 'UPDATE_USER_SUCCESS': {
      return { ...state, loading: false };
    }

    case 'LOGIN_FAIL':
    case 'REGISTER_FAIL':
    case 'CHECK_EMAIL_FAIL':
    case 'UPDATE_USER_FAIL':
      return { ...state, loading: false, error: payload.message };

    default:
      return state;
  }
};
