import React, {
  Children,
  useContext,
  useState,
  useEffect,
  useRef,
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

figure out a way to get the thumbnails to scroll automatically upon manipulating
the carousel

when refs scroll view up, it moves entire component up. Stop that.
*/

const ModalGallery = ({ modal }) => {
  const {
    index, setIndex, currentStyle, handleSelect,
  } = useContext(
    OverviewContext,
  );

  const [currentModalThumbnailRef, setCurrentModalThumbnailRef] = useState(
    null,
  );

  const ModalThumbnailsRefs = useRef([]);

  useEffect(() => {
    setCurrentModalThumbnailRef(ModalThumbnailsRefs.current[index]);
    if (currentModalThumbnailRef) {
      currentModalThumbnailRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
    return () => setCurrentModalThumbnailRef(null);
  }, [index, currentModalThumbnailRef]);

  console.log('currentModalThumbnailRef: ', currentModalThumbnailRef);

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
                    ref={(currentModalThumbnail) => (
                      ModalThumbnailsRefs.current.push(currentModalThumbnail)
                    )}
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
};

ModalGallery.defaultProps = {
  modal: { close: () => {}, open: () => {} },
};

export default ModalGallery;
