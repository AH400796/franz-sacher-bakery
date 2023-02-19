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

export default function NavBar({ screenWidth }) {
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
      {screenWidth > 767 && <Navigation />}
    </NavWrapper>
  );
}
