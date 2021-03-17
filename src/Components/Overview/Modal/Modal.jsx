import React, {
  useEffect,
  // useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useContext,
} from 'react';
import { createPortal } from 'react-dom';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import './Modal.scss';

const modalElement = document.getElementById('modal-root');

const Modal = ({ children, fade = false }, ref) => {
  const { isOpen, setIsOpen } = useContext(OverviewContext);

  // const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close, setIsOpen],
  );

  const handleEscape = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape, false);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={`modal ${fade ? 'modal-fade' : ''}`}>
        <div className="modal-overlay" onClick={close} />
        <span
          role="button"
          className="modal-close"
          aria-label="close"
          onClick={close}
        >
          &#10005;
        </span>
        <div className="modal-body">{children}</div>
      </div>
    ) : null,
    modalElement,
  );
};

export default forwardRef(Modal);
