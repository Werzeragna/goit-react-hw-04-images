import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { StyledGalleryItem, StyledImage } from './ImgGalleryItem.styled';

export const GalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const onCloseModalClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <StyledGalleryItem>
      <StyledImage
        src={webformatURL}
        alt={tags}
        width="500"
        height="210"
        loading="lazy"
        onClick={toggleModal}
      />

      {isModalOpen && (
        <Modal
          modalImg={largeImageURL}
          tags={tags}
          closeByEsc={toggleModal}
          closeModal={onCloseModalClick}
        />
      )}
    </StyledGalleryItem>
  );
};

GalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
