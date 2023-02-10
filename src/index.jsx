import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './utils/configureStore';

const container = document.getElementById('root');

const root = createRoot(container);

const store = configureStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
