import {
  StyledFooter,
  FooterText,
  FooterContacts,
  Wrapper,
  IconWrapper,
} from './Footer.styled';
import Container from 'components/Container';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterContacts>
          <Wrapper>
            <a href="mailto:ibambutsa@gmail.com" aria-label="email">
              <IconWrapper>
                <IoMdMail size={20} color={'#5162c4'} />
              </IconWrapper>
            </a>
          </Wrapper>
          <Wrapper>
            <a href="tel:+380678044780" aria-label="phone number">
              <IconWrapper>
                <FaPhoneAlt size={20} color={'#5162c4'} />
              </IconWrapper>
            </a>
          </Wrapper>
          <Wrapper>
            <a
              href="https://www.instagram.com/franz_zacher/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
            >
              <IconWrapper>
                <BsInstagram size={20} color={'#5162c4'} />
              </IconWrapper>
            </a>
          </Wrapper>
          <Wrapper>
            <a
              href="https://www.facebook.com/FranzSacherLviv/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
            >
              <IconWrapper>
                <BsFacebook size={20} color={'#5162c4'} />
              </IconWrapper>
            </a>
          </Wrapper>
        </FooterContacts>
        <FooterText>
          © 2023, Created for <b>Franz Sacher bakery, Lviv</b>
        </FooterText>
      </Container>
    </StyledFooter>
  );
}
