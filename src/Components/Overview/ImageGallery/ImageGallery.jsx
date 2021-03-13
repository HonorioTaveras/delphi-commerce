import React, {
  useContext,
  Children,
  useState,
  useRef,
  useEffect,
} from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import Modal from '../Modal/Modal';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import {
  NextButton,
  PrevButton,
} from '../NextAndPrevButtons/NextAndPrevButtons';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './ImageGallery.scss';

const ImageGallery = () => {
  const { productStyles, currentStyleIdx } = useContext(OverviewContext);

  const [index, setIndex] = useState(0);
  const [currentThumbnailRef, setCurrentThumbnailRef] = useState(null);

  const thumbnailsRefs = useRef([]);
  const modal = useRef(null);

  const currentStyle = productStyles[currentStyleIdx];
  // const handleSelect = (idx) => setIndex(idx);

  useEffect(() => {
    setCurrentThumbnailRef(thumbnailsRefs.current[index]);
    if (currentThumbnailRef) {
      currentThumbnailRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [currentThumbnailRef, index]);

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
        <CarouselProvider
          className="carousel-provider"
          isIntrinsicHeight
          lockOnWindowScroll
          totalSlides={currentStyle && currentStyle.photos.length}
        >
          <Slider>
            {currentStyle
              ? Children.toArray(
                currentStyle.photos.map(({ url }, idx) => (
                  <Slide index={idx}>
                    <div className="carousel-image">
                      <img
                        src={url}
                        alt=""
                        onClick={() => modal.current.open()}
                      />
                    </div>
                  </Slide>
                )),
              )
              : null}
          </Slider>
          <ButtonBack className="carousel-control-prev">
            <PrevButton />
          </ButtonBack>
          <ButtonNext className="carousel-control-next">
            <NextButton />
          </ButtonNext>
        </CarouselProvider>
        {/* <Carousel
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
        </Carousel> */}
        <Modal ref={modal}>Sup dirtbag</Modal>
      </div>
    </div>
  );
};

export default ImageGallery;
