import { connect } from 'react-redux';
// import { updatepassAction } from '../../actions/authActions';
import ForgotPass from './page';

const mapDispatchToProps = (dispatch) => ({
  // updatepass: (values, actions) => updatepassAction(values, actions)(dispatch),

  updatepass: (data) =>
    dispatch({
      type: 'UPDATE_PASS_REQUEST',
      payload: {
        type: 'UPDATE_PASS',
        data,
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(null, mapDispatchToProps)(ForgotPass);
