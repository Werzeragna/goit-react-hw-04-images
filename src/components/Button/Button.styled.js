import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  margin: 0px auto 20px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #1f1f1f;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 2px 2px 3px 1px rgba(61, 61, 61, 0.6);
  :hover,
  :focus {
    opacity: 0.8;
  }
`;
