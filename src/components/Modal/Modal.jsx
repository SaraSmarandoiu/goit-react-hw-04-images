import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
