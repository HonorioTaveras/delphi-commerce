/* eslint-disable react/require-default-props */
import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

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
  modal, index, handleSelect, currentStyle,
}) => (
  <Modal ref={modal}>
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
  </Modal>
);

ModalGallery.propTypes = {
  modal: PropTypes.shape({
    close: PropTypes.func,
    open: PropTypes.func,
  }),
  index: PropTypes.number.isRequired,
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
};

ModalGallery.defaultProps = {
  modal: { close: () => {}, open: () => {} },
};

export default ModalGallery;
