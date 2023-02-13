import { connect } from 'react-redux';
import { loginAction } from '../../actions/authActions';
import Login from './page';

const mapDispatchToProps = (dispatch) => ({
  login: (values, actions) => loginAction(values, actions)(dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
