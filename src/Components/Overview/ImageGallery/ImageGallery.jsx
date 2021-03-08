import React, {
  useContext,
  Children,
  useState,
  useRef,
  useEffect,
} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { FetchContext } from '../../../providers/FetchProvider';

import ModalImage from '../ModalImage/ModalImage';
import {
  NextButton,
  PrevButton,
} from '../NextAndPrevButtons/NextAndPrevButtons';

import './ImageGallery.scss';

const ImageGallery = () => {
  const { productStyles, currentStyleIdx } = useContext(FetchContext);

  const [index, setIndex] = useState(0);
  const [currentThumbnailRef, setCurrentThumbnailRef] = useState(null);
  const [show, setShow] = useState(false);

  const thumbnailsRefs = useRef([]);

  const currentStyle = productStyles[currentStyleIdx];
  const handleSelect = (idx) => setIndex(idx);

  console.log(currentStyle && currentStyle.photos);

  useEffect(() => {
    setCurrentThumbnailRef(thumbnailsRefs.current[index]);
    if (currentThumbnailRef) {
      currentThumbnailRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [index]);

  return (
    <div className="image-gallery-container">
      <div className="thumbnails-container">
        {currentStyle
          ? Children.toArray(
            currentStyle.photos.map(({ url }, idx) => (
              <div
                className={`${
                  index === idx ? 'current-thumbnail' : ''
                } thumbnail-image`}
              >
                <img
                  src={url}
                  alt=""
                  onClick={() => setIndex(idx)}
                  ref={(currentThumbnail) => thumbnailsRefs.current.push(currentThumbnail)}
                />
              </div>
            )),
          )
          : null}
      </div>
      <div className="carousel-container">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          autoPlay={false}
          interval={null}
          wrap={false}
          indicators={false}
          keyboard
          fade
          prevIcon={<PrevButton />}
          nextIcon={<NextButton />}
        >
          {currentStyle
            ? Children.toArray(
              currentStyle.photos.map(({ url }) => (
                <Carousel.Item>
                  <div className="carousel-image">
                    <img src={url} alt="" onClick={() => setShow(true)} />
                  </div>
                </Carousel.Item>
              )),
            )
            : null}
        </Carousel>
        <ModalImage
          show={show}
          setShow={setShow}
          index={index}
          setIndex={setIndex}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
