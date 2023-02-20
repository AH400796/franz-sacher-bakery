import { StyledLink, NavLinks } from './Navigation.styled';

export default function Navigation() {
  return (
    <NavLinks>
      <StyledLink to="/">Про нас</StyledLink>
      <StyledLink to="/gallery">Наша продукція</StyledLink>
      <StyledLink to="/contacts">Як нас знайти</StyledLink>
    </NavLinks>
  );
}