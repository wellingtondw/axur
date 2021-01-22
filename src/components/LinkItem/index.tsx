import React from 'react';
import * as S from './styles';

export type LinkItemProps = {
  text: string;
  theme?: 'primary' | 'secondary';
};

const LinkItem: React.FC<LinkItemProps> = ({
  text,
  theme = 'primary',
  ...rest
}) => {
  return (
    <S.Link {...rest} role="link" theme={theme}>
      {text}
    </S.Link>
  );
};

export default LinkItem;
