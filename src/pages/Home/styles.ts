import styled from 'styled-components';

import Btn from '../../components/Button';
import CtBox from '../../components/ContentBox';
import LkItem from '../../components/LinkItem';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 40px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PrimaryContentBox = styled(CtBox)`
  max-width: 310px;
  margin-left: 16px;

  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 0;
  }

  @media only screen and (max-width: 480px) {
    max-width: 90%;
  }
`;

export const WrapperItems = styled.div`
  width: 100%;

  a:last-of-type {
    border: none;
  }
`;

export const SecondaryContentBox = styled(CtBox)`
  margin: 0 16px 0 40px;
  padding-bottom: 32px;

  @media only screen and (max-width: 768px) {
    margin: 16px 0;
  }
`;

export const ContentContainer = styled.div`
  margin-left: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #ddd;
  margin-bottom: 16px;
`;

export const Status = styled.p`
  font-size: 12px;
  color: #ddd;
  margin-bottom: 40px;
  margin-left: 8px;
`;

export const LinkContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
`;

export const Link = styled(LkItem)`
  padding: 0 8px;
`;
