import React, { useCallback, useState } from 'react';
import api from '../../services/api';

import * as S from './styles';

import Input from '../../components/Input';
import LinkItem from '../../components/LinkItem';

export type urlTermsListProps = {
  status: string;
  urls: string[];
  id: string;
};

export type termsListProps = {
  text: string;
  id: string;
};

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [urlTermsList, setUrlTermsList] = useState<urlTermsListProps>({
    id: '',
    urls: [],
    status: '',
  });
  const [termsList, setTermsList] = useState<termsListProps[]>(() => {
    const list = localStorage.getItem('@axur:registered-terms');

    return list ? JSON.parse(list) : [];
  });

  const handleInputChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);

  const handleSaveTerm = useCallback(async () => {
    const { data } = await api.post('/crawl', { keyword: inputValue });
    const { id } = data;
    const list = localStorage.getItem('@axur:registered-terms');
    const newList = list
      ? JSON.stringify([...JSON.parse(list), { id, text: inputValue }])
      : JSON.stringify([{ id, text: inputValue }]);

    localStorage.setItem('@axur:registered-terms', newList);
    setTermsList([...JSON.parse(newList)]);
    setInputValue('');
  }, [inputValue]);

  const handleGetTermUrl = useCallback(async id => {
    const { data } = await api.get(`crawl/${id}`);
    setUrlTermsList(data);
  }, []);

  const handleStatusText = useCallback(status => {
    let statusText = '';

    switch (status) {
      case 'done':
        statusText = 'Concluído';
        break;
      case 'active':
        statusText = 'Em andamento';
        break;
      default:
        statusText = '';
        break;
    }

    return <S.Status>{statusText}</S.Status>;
  }, []);

  const { status, id: urlTermsId, urls } = urlTermsList;
  const hasRegisteredItems = termsList.length > 0;
  const termHasUrls = urls.length > 0;
  const noUrlFoundForTerm = urls.length < 1 && urlTermsId;

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
          <S.Button title="Cadastrar novo termo" onClick={handleSaveTerm}>
            Cadastrar
          </S.Button>
        </S.Wrapper>
      </S.HeaderContainer>
      <S.MainContainer>
        <S.PrimaryContentBox
          title={
            hasRegisteredItems
              ? 'Termos cadastrados'
              : 'Nenhum termo cadastrado'
          }
        >
          <S.WrapperItems>
            {termsList.map(term => {
              const { text, id } = term;

              return (
                <LinkItem
                  key={id}
                  text={text}
                  onClick={() => handleGetTermUrl(id)}
                />
              );
            })}
          </S.WrapperItems>
        </S.PrimaryContentBox>
        <S.SecondaryContentBox
          title={urlTermsId || 'Selecione um item cadastrado anteriormente.'}
          theme="secondary"
        >
          <S.ContentContainer>
            {status && (
              <>
                <S.Title>Status</S.Title>
                {handleStatusText(status)}
              </>
            )}

            {termHasUrls && (
              <>
                <S.Title>Lista de URLs com o termo cadastrado</S.Title>
                <S.LinkContainer>
                  {urls.map(url => (
                    <S.Link
                      key={url}
                      text={url}
                      theme="secondary"
                      href={url}
                      target="_blank"
                    />
                  ))}
                </S.LinkContainer>
              </>
            )}
            {noUrlFoundForTerm && (
              <S.Title>Nenhuma URL encontrada para esse termo</S.Title>
            )}
          </S.ContentContainer>
        </S.SecondaryContentBox>
      </S.MainContainer>
    </S.Container>
  );
};

export default Home;
