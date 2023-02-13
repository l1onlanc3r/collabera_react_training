import { connect } from 'react-redux';
import { updatepassAction } from '../../actions/authActions';
import ForgotPass from './page';

const mapDispatchToProps = (dispatch) => ({
  updatepass: (values, actions) => updatepassAction(values, actions)(dispatch),
});

export default connect(null, mapDispatchToProps)(ForgotPass);
