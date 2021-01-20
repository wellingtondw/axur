import React, { useState, useCallback, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Input;
