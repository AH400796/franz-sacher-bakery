import { LogoWrapper, LogoImage } from './Logo.styled';
import logo from '../../images/logo.svg';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImage src={logo} alt="" width="120" heigth="120" />
    </LogoWrapper>
  );
}
