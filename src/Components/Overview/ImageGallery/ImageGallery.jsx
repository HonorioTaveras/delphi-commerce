import React, {
  useContext,
  Children,
  // useState,
  useRef,
  useEffect,
} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import ImageGallery from 'react-image-gallery';

import Modal from '../Modal/Modal';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

// import {
//   NextButton,
//   PrevButton,
// } from '../NextAndPrevButtons/NextAndPrevButtons';

import bootstrap from './bootstrap';
import './ImageGallery.scss';

const ImageGallerys = () => {
  const { productStyles, currentStyleIdx } = useContext(OverviewContext);

  // const [index, setIndex] = useState(0);
  // const [currentThumbnailRef, setCurrentThumbnailRef] = useState(null);
  // const [image, setImage] = useState([]);
  const images = [];

  // const thumbnailsRefs = useRef([]);
  const modal = useRef(null);

  const currentStyle = productStyles[currentStyleIdx];
  // const handleSelect = (idx) => setIndex(idx);

  // console.log('currentStyle: ', currentStyle.photos);

  // useEffect(() => {
  //   setCurrentThumbnailRef(thumbnailsRefs.current[index]);
  //   if (currentThumbnailRef) {
  //     currentThumbnailRef.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //       inline: 'center',
  //     });
  //   }
  // }, [index]);

  useEffect(() => {
    if (currentStyle) {
      Children.toArray(
        currentStyle.photos.map(({ url }) => images.push({
          original: url,
          thumbnail: url,
        })),
      );
    }
  }, [images]);

  console.log(images);

  return (
    <div className="image-gallery-container">
      <style scoped>{bootstrap}</style>
      {/* <div className="thumbnails-container">
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
      </div> */}
      <div className="carousel-container">
        <ImageGallery width="720" height="576" items={images} showPlayButton={false} thumbnailPosition="left" infinite={false} lazyLoad />
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

export default ImageGallerys;
