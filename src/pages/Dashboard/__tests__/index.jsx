import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import renderWithProviders from '../../../utils/test-utils';
import Dashboard from '..';
import axiosInstance from '../../../utils/axiosInstance';

const mock = new MockAdapter(axiosInstance);

const products = [
  {
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
  },
];

const cart = [
  {
    productId: 3,
    quantity: 1,
    id: 3,
  },
];

describe('test Dashboard page', () => {
  beforeEach(() => {
    mock.reset();
  });

  test('should first', async () => {
    renderWithProviders(<Dashboard />);
    const loading = await screen.findByTestId('loading');
    expect(loading).toBeInTheDocument();
  });

  test('should take snapshot before api call', () => {
    const { container } = renderWithProviders(<Dashboard />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should take snapshot after api call', async () => {
    mock.onGet('660/products').reply(200, products);
    mock.onGet('660/cart').reply(200, cart);

    const { asFragment } = renderWithProviders(<Dashboard />);
    await screen.findByTestId('products-list');
    expect(asFragment()).toMatchSnapshot();
  });

  test('should make server call to display products', async () => {
    mock.onGet('660/products').reply(200, products);
    mock.onGet('660/cart').reply(200, cart);
    renderWithProviders(<Dashboard />);
    const productList = await screen.findByTestId('products-list');
    expect(productList).toBeInTheDocument();
  });

  test('should return error', async () => {
    mock.onGet('660/products').networkErrorOnce();
    mock.onGet('660/cart').networkErrorOnce();
    renderWithProviders(<Dashboard />);
    const error = await screen.findByTestId('error');
    expect(error).toBeInTheDocument();
  });
});
