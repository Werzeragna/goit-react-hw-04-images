import styled from 'styled-components';

export const StyledGalleryItem = styled.li`
  width: 330px;
  height: 210px;
  border-radius: 8px;
  box-shadow:2px 2px 3px 1px rgba(61,61,61,0.6);
  overflow: hidden;
  cursor: zoom-in;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 400ms ease-in-out;
  filter: grayscale(0.5);
  :hover {
    filter: grayscale(0);
    transform: scale(1.05);
  }
`;
