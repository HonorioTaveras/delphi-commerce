import React, { useContext, Children } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { FetchContext } from '../../../providers/FetchProvider';

import './ImageGallery.scss';

const ImageGallery = () => {
  const { productStyles, currentStyleIdx } = useContext(FetchContext);
  const currentStyle = productStyles[currentStyleIdx];

  return (
    <div className="image-gallery-container">
      <Carousel className="carousel">
        {currentStyle
          && Children.toArray(
            currentStyle.photos.map(({ url }) => (
              <Carousel.Item>
                <img src={url} alt="" />
              </Carousel.Item>
            )),
          )}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
