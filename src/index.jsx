import React from 'react';
import ReactDOM from 'react-dom';

import { FetchProvider } from './providers/FetchProvider';
import { ReviewsProvider } from './providers/reviews/ReviewsProvider';

import './index.scss';

import App from './App/App';

ReactDOM.render(
  <FetchProvider>
    <ReviewsProvider>
      <App />
    </ReviewsProvider>
  </FetchProvider>,
  document.getElementById('app'),
);

module.hot.accept();
