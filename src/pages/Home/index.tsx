import React, { useCallback, useState } from 'react';
import * as S from './styles';

import Input from '../../components/Input';
import ContentBox from '../../components/ContentBox';
import LinkItem from '../../components/LinkItem';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);

  return (
    <S.Container>
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
      <S.MainContainer>
        <S.PrimaryContentBox title="Termos cadastrados">
          <S.WrapperItems>
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
            <LinkItem text="asddsad" />
          </S.WrapperItems>
        </S.PrimaryContentBox>
        <S.SecondaryContentBox title="Lorem #30vbllyb" theme="secondary">
          <S.ContentContainer>
            <S.Title>Status</S.Title>
            <S.Status>Concluído</S.Status>

            <S.Title>Lista de URLs com o termo cadastrado</S.Title>
            <S.LinkContainer>
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
              <S.Link text="http://localhost:3000/" theme="secondary" />
            </S.LinkContainer>
          </S.ContentContainer>
        </S.SecondaryContentBox>
      </S.MainContainer>
    </S.Container>
  );
};

export default Home;
