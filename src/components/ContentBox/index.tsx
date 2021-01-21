import React from 'react';
import * as S from './styles';

type ContentBoxProps = {
  title: string;
};

const ContentBox: React.FC<ContentBoxProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};

export default ContentBox;
