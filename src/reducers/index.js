import { combineReducers } from 'redux';
// import { LocaleReducer } from './localeReducer';
// import { ThemeReducer } from './themeReducer';
import user from './userReducer';
import loading from './loadingReducer';
import errors from './errorReducer';
import cart from './cartReducer';
import products from './productsReducer';

export default combineReducers({
  // locale: LocaleReducer,
  // theme: ThemeReducer,
  user,
  loading,
  errors,
  cart,
  products,
});
