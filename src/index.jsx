import React from 'react';
import ReactDOM from 'react-dom';

import { OverviewProvider } from './providers/overview/OverviewProvider';
import { ReviewsProvider } from './providers/reviews/ReviewsProvider';

import './index.scss';

import App from './App/App';

ReactDOM.render(
  <OverviewProvider>
    <ReviewsProvider>
      <App />
    </ReviewsProvider>
  </OverviewProvider>,
  document.getElementById('app'),
);

module.hot.accept();
