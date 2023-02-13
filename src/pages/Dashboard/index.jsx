import { connect } from 'react-redux';
import { loadCartAction } from '../../actions/cartActions';
import { loadProductsAction } from '../../actions/productsActions';
import Dashboard from './page';

const mapStateToProps = ({ products, loading }) => ({
  products,
  loading: loading.some(
    (x) => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  ),
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => loadProductsAction()(dispatch),
  loadCart: () => loadCartAction()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
