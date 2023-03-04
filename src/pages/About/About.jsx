import { Wrapper, CoffeeImgWrapper, CoffeeImg } from './About.styled';

import AboutUs from 'components/AboutUs';
import coffeCup from '../../images/coffee.svg';

export default function About() {
  return (
    <Wrapper>
      <AboutUs />
      <CoffeeImgWrapper>
        <CoffeeImg src={coffeCup} alt="Decorative cup of coffee" />
      </CoffeeImgWrapper>
    </Wrapper>
  );
}
