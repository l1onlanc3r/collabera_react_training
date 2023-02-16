import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product from '../component';
import { currency } from '../../../utils';

const product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const cartItem = {
  productId: 1,
  quantity: 1,
  id: 1,
};

const isLoading = false;

const addToCart = jest.fn();
const updateCartItem = jest.fn();
const deleteCartItem = jest.fn();

const renderProduct = ({ ...data }) => {
  const props = {
    product,
    isLoading,
    addToCart,
    updateCartItem,
    deleteCartItem,
    ...data,
  };

  return render(<Product {...props} />);
};

describe('Product Component for Add Cart', () => {
  let container = null;
  beforeEach(() => {
    container = renderProduct({}).container;
  });

  test('should render Product Component', () => {
    expect(container.firstChild).toBeDefined();
  });

  test('should take snapshot for Add Cart Item', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render Product Title', () => {
    const title = screen.queryByRole('heading', { level: 2 });
    expect(title).not.toBeNull();
    expect(title.innerHTML).toBe(product.title);
  });

  test('should render Product Description', () => {
    const desc = screen.queryByRole('heading', { level: 3 });
    expect(desc).not.toBeNull();
    expect(desc.innerHTML).toBe(product.description);
  });

  test('should render Product Price', () => {
    const price = screen.queryByTestId('price');
    expect(price).not.toBeNull();
    expect(price.innerHTML).toBe(currency(product.price));
  });

  test('should click Add to Bag button', () => {
    const btns = screen.queryAllByRole('button');
    fireEvent.click(btns[0]);
    expect(addToCart).toBeCalledTimes(1);
    expect(addToCart).toBeCalledWith({ productId: product.id, quantity: 1 });
  });
});

const checkButtons = () => {
  const btns = screen.queryAllByRole('button');
  expect(btns.length).toBe(2);
  expect(btns[0].innerHTML).toBe('-');
  expect(btns[1].innerHTML).toBe('+');

  return btns;
};

describe('Product Component For Update Cart with 2 Quantities', () => {
  let container = null;
  beforeEach(() => {
    container = renderProduct({
      cartItem: {
        ...cartItem,
        quantity: 2,
      },
    }).container;
  });

  test('should render Update Product Component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render Update Quantity buttons', () => {
    checkButtons();
  });

  test('should Click + button', () => {
    const btns = checkButtons();
    fireEvent.click(btns[1]);
    expect(updateCartItem).toBeCalledTimes(1);
    expect(updateCartItem).toBeCalledWith({
      ...cartItem,
      quantity: 3,
    });
  });

  test('should Click - button', () => {
    const btns = checkButtons();
    fireEvent.click(btns[0]);
    expect(updateCartItem).toBeCalledTimes(1);
    expect(updateCartItem).toBeCalledWith({
      ...cartItem,
      quantity: 1,
    });
  });
});

describe('Product Component For Update Cart with 1 Quantity', () => {
  let container = null;
  beforeEach(() => {
    container = renderProduct({ cartItem }).container;
  });

  test('should render Update Product Component 2', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render Update Quantity buttons', () => {
    checkButtons();
  });

  test('should Click - button', () => {
    const btns = checkButtons();
    fireEvent.click(btns[0]);
    expect(deleteCartItem).toBeCalledTimes(1);
    expect(deleteCartItem).toBeCalledWith(cartItem);
  });
});
