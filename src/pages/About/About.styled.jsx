import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  background-color: #feffe1;
  box-shadow: 3px 3px 9px 5px #453432;
  border-radius: 2px;
  height: 100%;
`;

export const CoffeeImgWrapperTop = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  background: linear-gradient(
    274.25deg,
    #453432 23.51%,
    rgba(69, 52, 50, 0.83) 50.89%,
    rgba(252, 166, 0, 0.81) 308.27%
  );
`;

export const CoffeeImgWrapperBottom = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  background: linear-gradient(
    274.25deg,
    #453432 23.51%,
    rgba(69, 52, 50, 0.83) 50.89%,
    rgba(252, 166, 0, 0.81) 308.27%
  );
`;

export const CoffeeImg = styled.img`
  width: 80px;
`;
