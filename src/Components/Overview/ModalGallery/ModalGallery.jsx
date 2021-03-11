import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';

const modalElement = document.getElementById('modal-root');

const Modal = ({ childen, defaultOpened = false }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }), [close]);

  return createPortal(
    isOpen ? <div className="modal">{childen}</div> : null,
    modalElement,
  );
};

export default forwardRef(Modal);
