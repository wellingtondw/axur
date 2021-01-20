import styled from 'styled-components';

import Btn from '../../components/Button';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #222;
  height: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const Logo = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1288px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled(Btn)`
  margin-left: 16px;

  @media only screen and (max-width: 768px) {
    margin: 16px 0 0 0;
  }
`;
