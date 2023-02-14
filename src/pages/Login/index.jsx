import { connect } from 'react-redux';
// import { loginAction } from '../../actions/authActions';
import Login from './page';

const mapDispatchToProps = (dispatch) => ({
  // login: (values, actions) => loginAction(values, actions)(dispatch),

  // usng redux-saga
  login: (data) =>
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: {
        url: 'login',
        method: 'post',
        data,
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(null, mapDispatchToProps)(Login);
