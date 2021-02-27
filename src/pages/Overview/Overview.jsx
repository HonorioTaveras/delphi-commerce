import React from 'react';

import ImageGallery from '../../Components/Overview/ImageGallery/ImageGallery';

import './Overview.scss';

const Overview = () => (
  <div className="overview-container">
    <div className="image-gallery">
      <ImageGallery />
    </div>
  </div>
);

export default Overview;
