import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  background-color: #feffe1;
  box-shadow: 3px 3px 9px 5px #453432;
  border-radius: 2px;
  height: 100%;
`;

export const CoffeeImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  background-color: #453432;
  border: 2px solid #d8a331;
`;

export const CoffeeImg = styled.img`
  width: 80px;
`;
