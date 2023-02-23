export const initialState = {
  accessToken: '',
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS': {
      localStorage.setItem('token', JSON.stringify(payload));
      return { ...state, ...payload };
    }

    case 'LOAD_USER': {
      const token = localStorage.getItem('token');
      if (token) {
        return JSON.parse(token);
      }
      return initialState;
    }

    case 'UPDATE_USER_SUCCESS': {
      window.location.href = '/auth';
      return state;
    }

    case 'LOGOUT':
      localStorage.clear();
      return initialState;

    default:
      return state;
  }
};
