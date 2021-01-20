import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  border-bottom: 1px solid #ddd;
  width: 100%;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff5824;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      border-color: #ff5824;
    `}
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  background-color: transparent;
  outline: 0;
  padding: 8px 8px 8px 0;
  font-size: 12px;
  color: #fff;

  ::placeholder {
    color: #ddd;
  }
`;
