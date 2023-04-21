import React from 'react';
import PropTypes from 'prop-types';

import { StyledGallery } from './Gallery.styled';
import { GalleryItem } from 'components/ImgGalleryItem/ImgGalleryItem';

export const Gallery = ({ images }) => {
  return (
    <StyledGallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <GalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        );
      })}
    </StyledGallery>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
