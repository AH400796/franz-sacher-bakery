import { LogoWrapper, LogoImage } from './Logo.styled';
import logo from '../../images/logo.svg';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImage src={logo} alt="Logo" width="100" heigth="132" />
    </LogoWrapper>
  );
}
