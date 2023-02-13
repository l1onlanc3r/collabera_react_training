import { connect } from 'react-redux';
import {
  addToCartAction,
  deleteCartItemAction,
  updateCartItemAction,
} from '../../actions/cartActions';
import Product from './component';

const mapStateToProps = ({ cart, loading }, { product }) => ({
  cartItem: cart.find((x) => x.productId === product.id),
  isLoading: loading.some((x) => x.loadingId === product.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => addToCartAction(data)(dispatch),
  updateCartItem: (data) => updateCartItemAction(data)(dispatch),
  deleteCartItem: (data) => deleteCartItemAction(data)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
