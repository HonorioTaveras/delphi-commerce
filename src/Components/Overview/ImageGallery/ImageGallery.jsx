import React, { useContext } from 'react';

import { FetchContext } from '../../../providers/FetchProvider';

import './ImageGallery.scss';

const ImageGallery = () => {
  const { productStyles } = useContext(FetchContext);

  console.log(productStyles);

  return <div>Sup dirtbag! from ImageGallery component</div>;
};

export default ImageGallery;
