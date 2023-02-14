import { connect } from 'react-redux';
import { deleteCartItemAction } from '../../actions/cartActions';
import Checkout from './component';

const mapStateToProps = ({ cart, products, loading }) => ({
  cart,
  products,
  isLoading: loading.some(
    (x) => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  ),
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (payload) =>
    dispatch({
      type: 'DELETE_CART_REQUEST',
      payload,
      meta: { loadingId: payload.productId },
    }), // (data) => deleteCartItemAction(data)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
