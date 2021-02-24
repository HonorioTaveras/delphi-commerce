import React from 'react';
import ReactDOM from 'react-dom';

import FetchProcuctsProvider from './providers/fetchProviders/FetchProductsProvider';

import App from './App/App';

ReactDOM.render(
  <FetchProcuctsProvider>
    <App />
  </FetchProcuctsProvider>,
  document.getElementById('app')
);

module.hot.accept();
