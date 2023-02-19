import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { fadeImages } from 'services/slider-images';
import { SliderImage, StyledFade, SliderTitle } from './Slider.styled';

export default function Slider() {
  return (
    <div className="slide-container">
      <StyledFade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <SliderImage src={fadeImage.url} />
            <SliderTitle>{fadeImage.caption}</SliderTitle>
          </div>
        ))}
      </StyledFade>
    </div>
  );
}
