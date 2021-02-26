import React from 'react';
import ReactDOM from 'react-dom';

import { FetchProvider } from './providers/FetchProvider';

import App from './App/App';

import './index.scss';

ReactDOM.render(
  <FetchProvider>
    <App />
  </FetchProvider>,
  document.getElementById('app'),
);

module.hot.accept();
