import { useState, useEffect } from 'react';
import {
  StyledLink,
  NavWrapper,
  Title,
  TitleName,
  TitleWrapper,
} from './NavBar.styled';
import Logo from 'components/Logo';
import BurgerMenu from 'components/BurgerMenu';
import Navigation from 'components/Navigation';

export default function NavBar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavWrapper>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <TitleWrapper>
        <Title>кондитерська-пекарня</Title>
        <TitleName>Франц Захер</TitleName>
      </TitleWrapper>
      {screenWidth < 768 && <BurgerMenu />}
      {screenWidth > 768 && <Navigation />}
    </NavWrapper>
  );
}
