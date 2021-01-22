import React from 'react';
import * as S from './styles';

export type ContentBoxProps = {
  title: string;
  theme?: 'primary' | 'secondary';
  style?: object;
};

const ContentBox: React.FC<ContentBoxProps> = ({
  title,
  theme = 'primary',
  children,
  ...rest
}) => {
  return (
    <S.Container data-testid="content-box-container" {...rest} theme={theme}>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};

export default ContentBox;
