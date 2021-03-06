import React, { useContext, Children, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

import { FetchContext } from '../../../providers/FetchProvider';

import { NextButton, PrevButton } from '../NextAndPrevButtons/NextAndPrevButtons';

import './ModalImage.scss';

const ModalImage = ({ show, setShow }) => {
  const { productStyles, currentStyleIdx } = useContext(FetchContext);

  const [index, setIndex] = useState(0);

  const currentStyle = productStyles[currentStyleIdx];
  const handleSelect = (idx) => setIndex(idx);

  return (
    <div className="modal-container">
      <Modal
        show={show}
        onHide={() => setShow(false)}
        enforceFocus
        centered
        size="xl"
      >
        <div className="modal-carousel-container">
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
        </div>
      </Modal>
    </div>
  );
};

ModalImage.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default ModalImage;
