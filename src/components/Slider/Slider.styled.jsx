import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';

export const SliderImage = styled.img`
  width: 100%;
  border-radius: 2px;
  border: 1px dotted #453432;
`;

export const StyledFade = styled(Fade)`
  position: relative;
`;
export const SliderTitle = styled.h2`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 13px;
  font-weight: 500;
  font-style: italic;

  color: #feffe1;
  background-color: #453432;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px #feffe1;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 5px 15px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    padding: 5px 20px;
  }
`;
