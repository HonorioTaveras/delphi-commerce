import React, {
  useState, useEffect, createContext, useContext,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import UrlContext from '../../contexts/url/url.context';
import ProductIdContext from '../../contexts/productId/productId.context';

const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {
  const url = useContext(UrlContext);
  const productId = useContext(ProductIdContext);

  const [reviewsInformation, setReviewsInformation] = useState([]);
  const listReviewsEndpoint = `reviews/${productId}/list`;

  useEffect(() => {
    fetchListReviews();
  }, []);

  const fetchListReviews = async () => {
    try {
      const res = await axios.get(`${url}/${listReviewsEndpoint}`);
      setReviewsInformation(res.data.results);
    } catch (error) {
      console.log('fetch reviewa information error: ', JSON.parse(error));
    }
  };

  // console.log(reviewsInformation);

  return (
    <ReviewsContext.Provider
      value={{
        reviewsInformation,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};

ReviewsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export { ReviewsContext, ReviewsProvider };
