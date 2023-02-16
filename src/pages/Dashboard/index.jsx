import { connect } from 'react-redux';
// import { loadCartAction } from '../../actions/cartActions';
// import { loadProductsAction } from '../../actions/productsActions';
import Dashboard from './page';

const mapStateToProps = ({ products, loading, errors }) => ({
  products,
  loading: loading.some(
    (x) => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  ),
  hasError: errors.some(
    (x) => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  ),
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () =>
    dispatch({
      type: 'LOAD_PRODUCTS_REQUEST',
      payload: {
        url: '660/products',
        method: 'get',
      },
      meta: { loadingId: -1 },
    }), // loadProductsAction()(dispatch),
  loadCart: () =>
    dispatch({
      type: 'LOAD_CART_REQUEST',
      payload: {
        url: '660/cart',
        method: 'get',
      },
      meta: { loadingId: -1 },
    }), // loadCartAction()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
