import React from 'react';

import './NextAndPrevButtons.scss';

import PrevIcon from '../../../assets/left-arrow.svg';
import NextIcon from '../../../assets/right-arrow.svg';

const NextButton = () => (
  <div className="next-btn">
    <img src={NextIcon} height="20" width="20" alt="" />
  </div>
);

const PrevButton = () => (
  <div className="prev-btn">
    <img src={PrevIcon} height="20" width="20" alt="" />
  </div>
);

export { NextButton, PrevButton };
