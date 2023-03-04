import styled from 'styled-components';
import bgMain from '../../images/bg-main.png';

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.main`
  background-image: url(${bgMain});
  background-repeat: repeat;
  background-position: center;
  flex: 1 0 auto;

  padding: 20px 0;

  @media screen and (min-width: 768px) {
    padding: 30px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 0;
  }
`;
