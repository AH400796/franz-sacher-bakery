import styled from 'styled-components';

export const LogoWrapper = styled.div`
  background-color: #fffdd0;
  border-radius: 50%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 5px;
  box-shadow: 1px 1px 3px 4px #fffdd0;
`;

export const LogoImage = styled.img`
  width: 70px;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 120px;
  }
`;
