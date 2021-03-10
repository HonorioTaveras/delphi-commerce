import React, { useContext, useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

import { ReviewsContext } from '../../../providers/reviews/ReviewsProvider';

import './StarRating.scss';

const StarRating = () => {
  const { reviewsInformation } = useContext(ReviewsContext);

  const [rating, setRating] = useState(0);

  const handleRatingsAverage = () => {
    if (reviewsInformation.length === 0) {
      return;
    }
    const averageRating = reviewsInformation.reduce((total, currentReview) => (
      (total + currentReview.rating)
    ), 0) / reviewsInformation.length;
    setRating(averageRating);
  };

  useEffect(() => {
    handleRatingsAverage();
  }, [reviewsInformation]);

  const handleClickReviews = (e) => e.preventDefault();

  if (reviewsInformation.length) {
    return (
      <div className="star-rating-container">
        <div>
          <Rating
            name="read-only"
            readOnly
            value={rating}
            precision={0.25}
            size="small"
          />
        </div>
        <div>
          <a
            href="/"
            onClick={(e) => handleClickReviews(e)}
            className="reviews-link"
          >
            Read all
            {` ${reviewsInformation.length}`}
            {' '}
            reviews
          </a>
        </div>
      </div>
    );
  }
  return null;
};

export default StarRating;
