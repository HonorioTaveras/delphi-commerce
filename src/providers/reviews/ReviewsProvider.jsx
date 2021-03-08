import React, { createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import UrlContext from '../contexts/url/url.context';
import ProductIdContext from '../contexts/productId/productId.context';

const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {

};

export { ReviewsContext, ReviewsProvider };
