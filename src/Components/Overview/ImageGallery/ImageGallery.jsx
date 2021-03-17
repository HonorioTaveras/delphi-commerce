import React, {
  useContext,
  Children,
  useState,
  useRef,
  useEffect,
} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ModalGallery from '../ModalGallery/ModalGallery';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import {
  NextButton,
  PrevButton,
} from '../NextAndPrevButtons/NextAndPrevButtons';

import './ImageGallery.scss';

const ImageGallery = () => {
  const {
    index,
    setIndex,
    currentStyle,
    handleSelect,
    isOpen,
    // setIsOpen
  } = useContext(OverviewContext);

  const [currentThumbnailRef, setCurrentThumbnailRef] = useState(null);

  const thumbnailsRefs = useRef([]);
  const modal = useRef(null);

  useEffect(() => {
    setCurrentThumbnailRef(thumbnailsRefs.current[index]);
    if (currentThumbnailRef) {
      currentThumbnailRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
    if (isOpen) {
      setCurrentThumbnailRef(null);
    }
  }, [index, currentThumbnailRef, isOpen]);

  console.log('modal: ', modal.current && modal.current.open);
  return (
    <div className="image-gallery-container">
      <div className="thumbnails-container">
        {currentStyle
          ? Children.toArray(
            currentStyle.photos.map(({ url }, idx) => (
              <div
                className={`${
                  index === idx && !isOpen ? 'current-thumbnail' : ''
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
          prevIcon={<PrevButton />}
          nextIcon={<NextButton />}
        >
          {currentStyle
            ? Children.toArray(
              currentStyle.photos.map(({ url }) => (
                <Carousel.Item>
                  <div className="carousel-image">
                    <img
                      src={url}
                      alt=""
                      onClick={() => modal.current.open()}
                    />
                  </div>
                </Carousel.Item>
              )),
            )
            : null}
        </Carousel>
        <ModalGallery modal={modal} />
      </div>
    </div>
  );
};

export default ImageGallery;
