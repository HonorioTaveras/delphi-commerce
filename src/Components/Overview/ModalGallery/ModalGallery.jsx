import React, {
  Children, useContext, useState, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import Modal from '../Modal/Modal';
import {
  PrevButton,
  NextButton,
} from '../NextAndPrevButtons/NextAndPrevButtons';

import './ModalGallery.scss';

/*
 seperate this component from image gallery so that when going through it,
it does not change the carousel and thumbnails of image gallery component causing bad UX
*/

const ModalGallery = ({
  modal,
  // index,
  handleSelect,
  currentStyle,
  // setIndex,
}) => {
  const {
    index, setIndex,
  } = useContext(OverviewContext);

  const [currentThumbnailRef, setCurrentThumbnailRef] = useState(null);

  const thumbnailsRefs = useRef([]);

  useEffect(() => {
    setCurrentThumbnailRef(thumbnailsRefs.current[index]);
    if (currentThumbnailRef) {
      currentThumbnailRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [index, currentThumbnailRef]);

  return (
    <Modal ref={modal}>
      <div className="modal-container">
        <div className="modal-carousel-container">
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
                    <div className="modal-carousel-image">
                      <img src={url} alt="" />
                    </div>
                  </Carousel.Item>
                )),
              )
              : null}
          </Carousel>
        </div>
        <div className="modal-thumbnails-container">
          {currentStyle
            ? Children.toArray(
              currentStyle.photos.map(({ url }, idx) => (
                <div
                  className={`${
                    index === idx ? 'current-modal-thumbnail' : ''
                  } modal-thumbnail-image`}
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
      </div>
    </Modal>
  );
};

ModalGallery.propTypes = {
  modal: PropTypes.shape({
    close: PropTypes.func,
    open: PropTypes.func,
  }),
  // index: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
  currentStyle: PropTypes.shape({
    default: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    sale_price: PropTypes.string,
    skus: PropTypes.objectOf(PropTypes.number),
    style_id: PropTypes.number,
  }),
  // setIndex: PropTypes.func.isRequired,
};

ModalGallery.defaultProps = {
  modal: { close: () => {}, open: () => {} },
  currentStyle: {
    default: 1,
    name: 'White & White',
    original_price: '99',
    photos: [{
      thumbnail_url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1544441892-79416',
    }],
    sale_price: '0',
    skus: {
      7: 14, 8: 9, 9: 18, 10: 10, 11: 11, 12: 25, 7.5: 25, 8.5: 2, 9.5: 12, 10.5: 18, 11.5: 35,
    },
    style_id: 26,
  },
};

export default ModalGallery;
