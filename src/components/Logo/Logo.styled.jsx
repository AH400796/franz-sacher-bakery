import styled, { keyframes } from 'styled-components';

const animation = keyframes`
0% {    
    transform: rotateY(0);
  }
50% {
    transform: rotateY(180deg);
  }
100% {
    transform: rotateY(0);
  }
`;

export const LogoWrapper = styled.div`
  background-color: #fffdd0;
  border-radius: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 11px;
  padding-right: 11px;
  border: 3px solid #d8a331;

  animation-name: ${animation};
  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
    padding-left: 17px;
    padding-right: 17px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const LogoImage = styled.img`
  width: 50px;
  @media screen and (min-width: 768px) {
    width: 80px;
  }
  @media screen and (min-width: 1280px) {
    width: 100px;
  }
`;
