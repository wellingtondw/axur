import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 324px;
  border: 1px solid #ddd;
  height: 374px;
  overflow-y: auto;
  border-radius: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #222;
  margin: 16px 0 32px 8px;
`;
