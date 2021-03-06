import React, { useContext, Children, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

import { FetchContext } from '../../../providers/FetchProvider';

import PrevIcon from '../../../assets/left-arrow.svg';
import NextIcon from '../../../assets/right-arrow.svg';

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
                    <img src={url} alt="" onClick={() => setShow(true)} />
                  </div>
                </Carousel.Item>
              )),
            )
            : null}
        </Carousel>
      </Modal>
    </div>
  );
};

ModalImage.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default ModalImage;
