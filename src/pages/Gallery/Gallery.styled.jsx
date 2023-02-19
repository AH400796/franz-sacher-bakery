import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  background-color: #feffe1;
  box-shadow: 3px 3px 9px 5px #453432;
  border-radius: 2px;
  height: 100%;
`;

export const SliderWrapper = styled.div`
  width: ${props => {
    return `${props.sliderWidth}px`;
  }};
  display: block;

  /* @media screen and (max-width: 399px) {
    max-width: 250px;
  }

  @media screen and (min-width: 400px) and (max-width: 480px) {
    max-width: 350px;
  }

  @media screen and (min-width: 768px) {
    max-width: 650px;
  } */
`;
