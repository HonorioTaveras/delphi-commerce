import React, { useContext, Children } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { FetchContext } from '../../../providers/FetchProvider';

import PrevIcon from '../../../assets/left-arrow.svg';
import NextIcon from '../../../assets/right-arrow.svg';

import './ImageGallery.scss';

const ImageGallery = () => {
  const { productStyles, currentStyleIdx } = useContext(FetchContext);
  const currentStyle = productStyles[currentStyleIdx];

  console.log(currentStyle);

  return (
    <div className="image-gallery-container">
      <div className="thumbnails-container">
        {currentStyle
          ? Children.toArray(
            currentStyle.photos.map(({ thumbnail_url }) => (
              <div className="thumbnail-image">
                <img src={thumbnail_url} alt="" />
              </div>
            )),
          )
          : null}
      </div>
      <Carousel
        autoPlay={false}
        interval={null}
        wrap={false}
        indicators={false}
        keyboard
        fade
        prevIcon={(
          <div className="prev-btn">
            <img src={PrevIcon} height="20" width="20" alt="" />
          </div>
        )}
        nextIcon={(
          <div className="next-btn">
            <img src={NextIcon} height="20" width="20" alt="" />
          </div>
        )}
      >
        {currentStyle
          ? Children.toArray(
            currentStyle.photos.map(({ url }) => (
              <Carousel.Item>
                <div className="carousel-image">
                  <img src={url} alt="" />
                </div>
              </Carousel.Item>
            )),
          )
          : null}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
