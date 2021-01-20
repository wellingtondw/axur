import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import * as S from './styles';

type InputProps = {
  inputContainerStyle?: object;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  value,
  inputContainerStyle,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <S.Container
      isFocused={isFocused}
      isFilled={isFilled}
      data-testid="input-container"
      style={inputContainerStyle}
    >
      <S.Input
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
      />
    </S.Container>
  );
};

export default Input;
