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
      <S.Logo>Axur</S.Logo>
      <S.Description>Ferramenta para automação de busca</S.Description>
      <S.Wrapper>
        <Input
          placeholder="Digite o termo para ser inspecionado"
          onChange={e => handleInputChange(e)}
          value={inputValue}
          inputContainerStyle={{ maxWidth: 460 }}
        />
        <S.Button title="Cadastrar novo termo">Cadastrar</S.Button>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Home;
