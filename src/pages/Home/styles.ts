import styled from 'styled-components';

import Btn from '../../components/Button';

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #222;
  height: 288px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1288px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Btn)`
  margin-left: 16px;
`;
