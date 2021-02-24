import React from 'react';
import ReactDOM from 'react-dom';

import { FetchProductsProvider } from './providers/fetchProviders/FetchProductsProvider';

import App from './App/App';

ReactDOM.render(
  <FetchProductsProvider>
    <App />
  </FetchProductsProvider>,
  document.getElementById('app')
);

module.hot.accept();
