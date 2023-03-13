import {
  Wrapper,
  CoffeeImgWrapperTop,
  CoffeeImgWrapperBottom,
  CoffeeImg,
} from './About.styled';

import AboutUs from 'components/AboutUs';
import coffeCup from '../../images/coffee.svg';

export default function About() {
  return (
    <Wrapper>
      <CoffeeImgWrapperTop>
        <CoffeeImg
          src={coffeCup}
          alt="Decorative cup of coffee"
          width="80"
          height="80"
        />
      </CoffeeImgWrapperTop>
      <AboutUs />
      <CoffeeImgWrapperBottom>
        <CoffeeImg
          src={coffeCup}
          alt="Decorative cup of coffee"
          width="80"
          height="80"
        />
      </CoffeeImgWrapperBottom>
    </Wrapper>
  );
}
