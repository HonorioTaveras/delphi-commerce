import React, { useContext } from 'react';

import { FetchContext } from '../../providers/FetchProvider';

import ImageGallery from '../../Components/Overview/ImageGallery/ImageGallery';

import './Overview.scss';

const Overview = () => {
  const { productInformation } = useContext(FetchContext);

  return <div>
    <ImageGallery />
  </div>;
};

export default Overview;
