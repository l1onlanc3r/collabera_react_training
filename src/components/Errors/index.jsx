import { connect } from 'react-redux';
import Errors from './component';

const mapStateToProps = ({ errors }) => ({
  errors,
});

export default connect(mapStateToProps)(Errors);
