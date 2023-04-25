import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  StyledModalImg,
  StyledModalViewer,
  StyledOverlay,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeByEsc, closeModal, modalImg, tags }) => {
  useEffect(() => {
    const onCloseByEsc = e => {
      if (e.code === 'Escape') {
        closeByEsc();
      }
      return;
    };

    window.addEventListener('keydown', onCloseByEsc);

    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [closeByEsc]);

  return createPortal(
    <StyledOverlay onClick={closeModal}>
      <StyledModalViewer>
        <StyledModalImg src={modalImg} alt={tags} />
      </StyledModalViewer>
    </StyledOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
