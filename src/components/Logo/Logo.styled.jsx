import styled from 'styled-components';

export const LogoWrapper = styled.div`
  background-color: #fffdd0;
  border-radius: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 1px 1px 3px 4px #fffdd0;
  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
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
