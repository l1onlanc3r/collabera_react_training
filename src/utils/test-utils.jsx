import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import configureStore from './configureStore';

// As a basic setup, import your same slice reducers

export default function renderWithProviders(ui) {
  const store = configureStore();

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper }) };
}
