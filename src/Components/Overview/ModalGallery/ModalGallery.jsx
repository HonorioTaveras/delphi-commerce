import React from 'react';
import { createPortal } from 'react-dom';

const modalElement = document.getElementById('modal-root');

const Modal = ({ childen }) => createPortal(
  <div className="modal">{ childen }</div>,
  modalElement,
);

export default Modal;
