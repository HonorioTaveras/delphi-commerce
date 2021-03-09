import React, { useContext, useState } from 'react';
import Rating from '@material-ui/lab/Rating';

import { ReviewsContext } from '../../../providers/reviews/ReviewsProvider';

import './StarRating.scss';

const StarRating = () => {
  const { reviewsInformation } = useContext(ReviewsContext);

  const [rating, setRating] = useState(0);
};

export default StarRating;
