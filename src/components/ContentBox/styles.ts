import styled, { css } from 'styled-components';

type StylesProps = {
  theme: 'primary' | 'secondary';
};

const contentBoxModifiers = {
  primary: css`
    background: #fff;
    color: #222;
  `,
  secondary: css`
    background: #222;
    color: #ddd;
  `,
};

export const Container = styled.div<StylesProps>`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid #ddd;
    height: 374px;
    overflow-y: auto;
    border-radius: 4px;

    ${theme && contentBoxModifiers[theme]};

    &::-webkit-scrollbar {
      display: none;
    }
  `}

  @media only screen and (max-width: 768px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 480px) {
    max-width: 90%;
  }
`;

export const Title = styled.h2<StylesProps>`
  font-size: 20px;
  font-weight: bold;
  margin: 16px 0 32px 16px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
