import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { useCartContext } from '../../contexts/cartContext';
// import { useLoadingContext } from '../../contexts/loadingContext';
import Reviews from '../Reviews';

function Product({
  product,
  cartItem,
  isLoading,
  addToCart,
  updateCartItem,
  deleteCartItem,
}) {
  // const { cart, addToCart, updateCartItem, deleteCartItem } = useCartContext();
  // const { loading } = useLoadingContext();

  /*
  const cartItem = useMemo(
    () => cart.find((x) => x.productId === product.id),
    [cart, product],
  );

  const isLoading = useMemo(
    () => loading.some((x) => x.loadingId === product.id),
    [loading, product],
  );
*/

  // const isLoading = false;

  // console.log('cart: ', cart);
  // console.log('cartItem: ', cartItem);
  // console.log('product: ', product);
  // console.log('loading: ', loading);
  console.log('product render');

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8 my-10">
      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-2 lg:col-span-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-center"
        />
      </div>
      <div className="sm:col-span-10 lg:col-span-9 grid h-full">
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {product.title}
        </h2>

        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading">{product.description}</h3>

          <p className="text-2xl text-gray-900">{product.price}</p>

          {/* Reviews */}
          <Reviews {...product.rating} />
        </section>

        <section aria-labelledby="options-heading" className="mt-4">
          {cartItem ? (
            <div className="flex items-center">
              <button
                type="button"
                className="flex flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
                disabled={isLoading}
                onClick={() => {
                  if (cartItem.quantity <= 1) {
                    deleteCartItem(cartItem);
                  } else {
                    updateCartItem({
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                    });
                  }
                }}
              >
                -
              </button>
              <p className="flex-1 text-2xl font-bold text-center">
                {cartItem.quantity}
              </p>
              <button
                type="button"
                className="flex flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
                disabled={isLoading}
                onClick={() =>
                  updateCartItem({
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                  })
                }
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
              disabled={isLoading}
              onClick={() =>
                addToCart({
                  productId: product.id,
                  quantity: 1,
                })
              }
            >
              Add to bag
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({}).isRequired,
  }).isRequired,
  cartItem: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
};

Product.defaultProps = {
  cartItem: undefined,
};

export default Product;
