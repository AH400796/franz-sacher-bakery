import { LogoWrapper, LogoImage } from './Logo.styled';
import logo from '../../image/logo.svg';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImage src={logo} alt="" width="70" heigth="70" />
    </LogoWrapper>
  );
}
