import React, { useCallback, useState } from 'react';
import * as S from './styles';

import Input from '../../components/Input';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);

  return (
    <S.HeaderContainer>
      <S.Wrapper>
        <Input
          placeholder="Digite o termo para ser inspecionado"
          onChange={e => handleInputChange(e)}
          value={inputValue}
        />
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Home;
