import styled, { css } from 'styled-components';

type LinkProps = {
  theme: 'primary' | 'secondary';
};

const LinkModifiers = {
  primary: css`
    color: #222;
  `,
  secondary: css`
    color: #ddd;
    border-bottom: none;
  `,
};

export const Link = styled.a<LinkProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 12px;
    text-decoration: underline;
    width: 100%;
    border-bottom: 1px solid #ddd;
    height: 40px;
    padding: 0 16px;
    cursor: pointer;

    ${theme && LinkModifiers[theme]};
  `}
`;
