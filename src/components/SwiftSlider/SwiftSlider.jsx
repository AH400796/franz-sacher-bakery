import React from 'react';
import SwiftSlider from 'react-swift-slider';
import { data } from 'services/slider-images';
// import { SliderImage, StyledFade, SliderTitle } from './SwiftSlider.styled';

export default function SwSlider() {
  return (
    <SwiftSlider
      data={data}
      enableNextAndPrev={true}
      activeDotColor={'#453432'}
    />
  );
}
