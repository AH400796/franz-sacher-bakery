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
  display: block;
  width: ${props => {
    return `${props.sliderWidth}px`;
  }};

  @media screen and (min-width: 1280px) {
    width: 850px;
  }
`;
