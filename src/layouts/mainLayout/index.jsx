import { connect } from 'react-redux';
import MainLayout from './layout';

const mapStateToProps = ({ user: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(MainLayout);
