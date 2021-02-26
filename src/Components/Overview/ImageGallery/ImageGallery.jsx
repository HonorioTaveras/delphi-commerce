import React, { useContext } from 'react';

import { FetchContext } from '../../../providers/FetchProvider';

import './ImageGallery.scss';

const ImageGallery = () => {
  const { productStyles, currentStyleIdx } = useContext(FetchContext);

  console.log(productStyles[currentStyleIdx]);

  return <div>Sup dirtbag! from ImageGallery component</div>;
};

export default ImageGallery;
