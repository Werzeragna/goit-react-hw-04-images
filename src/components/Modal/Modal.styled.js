import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModalViewer = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: transparent;
  border-radius: 16px;
  overflow: hidden;
`;

export const StyledModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
