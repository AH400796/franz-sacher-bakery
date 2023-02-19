import { slide as Menu } from 'react-burger-menu';
import { StyledLink } from '../NavBar/NavBar.styled';
import { styles } from 'services/burger-menu-styles';
import { useState } from 'react';

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOnClick = () => {
    setIsMenuOpen(false);
  };

  const handleOnOpen = () => {
    setIsMenuOpen(true);
  };

  const handleOnClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <Menu
      styles={styles}
      width={300}
      right
      isOpen={isMenuOpen}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
    >
      <StyledLink to="/" onClick={handleOnClick}>
        Про нас
      </StyledLink>
      <StyledLink to="/gallery" onClick={handleOnClick}>
        Наша продукція
      </StyledLink>
      <StyledLink to="/contacts" onClick={handleOnClick}>
        Як нас знайти
      </StyledLink>
    </Menu>
  );
}
