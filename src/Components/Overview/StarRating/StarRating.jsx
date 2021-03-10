import React, { useContext, useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

import { ReviewsContext } from '../../../providers/reviews/ReviewsProvider';

import './StarRating.scss';

const StarRating = () => {
  const { reviewsInformation } = useContext(ReviewsContext);

  const [rating, setRating] = useState(0);

  const handleRatingsAverage = () => {
    let total = 0;
    if (reviewsInformation.length === 0) {
      return;
    }
    for (let i = 0; i < reviewsInformation.length; i += 1) {
      const currentReview = reviewsInformation[i];
      total += currentReview.rating;
    }
    const averageRating = (total / reviewsInformation.length).toFixed(1);
    setRating(parseFloat(averageRating));
  };

  useEffect(() => {
    handleRatingsAverage();
  }, [reviewsInformation]);

  const handleClickReviews = (e) => e.preventDefault();

  if (reviewsInformation.length) {
    return (
      <div>
        <span>
          <Rating
            name="read-only"
            readOnly
            value={rating}
            precision={0.25}
            size="small"
          />
        </span>
        <span>
          <a
            href="/"
            onClick={(e) => handleClickReviews(e)}
            className="reviews-link"
          >
            {' '}
            Read all
            {` ${reviewsInformation.length}`}
            {' '}
            reviews
          </a>
        </span>
      </div>
    );
  }
  return null;
};

export default StarRating;
