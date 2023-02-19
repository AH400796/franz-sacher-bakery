import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';

export const SliderImage = styled.img`
  width: 100%;
  border-radius: 2px;
  padding-bottom: 20px;
`;

export const StyledFade = styled(Fade)`
  position: relative;
`;
export const SliderTitle = styled.h2`
  position: absolute;
  left: 5px;
  bottom: 25px;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;

  color: #feffe1;
  background-color: #453432;
  padding: 5px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px #feffe1;
`;
