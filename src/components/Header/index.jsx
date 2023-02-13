import { connect } from 'react-redux';
import Header from './component';

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: 'LOGOUT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
