/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, Children, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { FetchContext } from '../../../providers/FetchProvider';

import PrevIcon from '../../../assets/left-arrow.svg';
import NextIcon from '../../../assets/right-arrow.svg';

import './ImageGallery.scss';

const ImageGallery = () => {
  const [index, setIndex] = useState(0);
  const { productStyles, currentStyleIdx } = useContext(FetchContext);
  const currentStyle = productStyles[currentStyleIdx];

  const handleSelect = (idx) => setIndex(idx);

  return (
    <div className="image-gallery-container">
      <div className="thumbnails-container">
        {currentStyle
          ? Children.toArray(
            currentStyle.photos.map(({ url }, idx) => (
              <div className="thumbnail-image">
                <img src={url} alt="" onClick={() => setIndex(idx)} />
              </div>
            )),
          )
          : null}
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
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
