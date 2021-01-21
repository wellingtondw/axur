import React from 'react';
import * as S from './styles';

export type LinkItemProps = {
  text: string;
};

const LinkItem: React.FC<LinkItemProps> = ({ text, ...rest }) => {
  return (
    <S.Link {...rest} role="link">
      {text}
    </S.Link>
  );
};

export default LinkItem;
