import { SliderWrapper } from './Gallery.styled';
import Slider from 'components/Slider';
import { Wrapper } from './Gallery.styled';

export default function Gallery() {
  return (
    <Wrapper>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
    </Wrapper>
  );
}
