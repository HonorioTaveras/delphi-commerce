import React, { useContext, Children } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

import { FetchContext } from '../../../providers/FetchProvider';

import { NextButton, PrevButton } from '../NextAndPrevButtons/NextAndPrevButtons';

import './ModalImage.scss';

const ModalImage = ({
  show, setShow, index, handleSelect,
}) => {
  const { productStyles, currentStyleIdx } = useContext(FetchContext);

  const currentStyle = productStyles[currentStyleIdx];

  return (
    <div className="modal-container">
      <Modal
        // bsPrefix="custom-modal"
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
                    <div className="modal-carousel-image">
                      <img src={url} alt="" />
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
  index: PropTypes.number.isRequired,
  // setIndex: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default ModalImage;
