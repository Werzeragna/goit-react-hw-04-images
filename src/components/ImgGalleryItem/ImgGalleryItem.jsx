import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { StyledGalleryItem, StyledImage } from './ImgGalleryItem.styled';

export class GalleryItem extends React.Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  onCloseModalClick = e => {
    if (e.currentTarget === e.target) {
      this.toggleModal();
    }
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal, onCloseModalClick } = this;
    return (
      <StyledGalleryItem className='gallery-item'>
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
  }
}

GalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };
