import React, { useContext, useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

import { ReviewsContext } from '../../../providers/reviews/ReviewsProvider';

import './StarRating.scss';

const StarRating = () => {
  const { reviewsInformation } = useContext(ReviewsContext);

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const handleRatingsAverage = () => {
      const averageRating = reviewsInformation.reduce(
        (total, currentReview) => total + currentReview.rating,
        0,
      ) / reviewsInformation.length;
      setRating(averageRating);
    };

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
          {reviewsInformation.length > 1 ? (
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
          ) : (
            <a
              href="/"
              onClick={(e) => handleClickReviews(e)}
              className="reviews-link"
            >
              Read review
            </a>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default StarRating;
