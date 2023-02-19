import {
  Wrapper,
  FlexWrapper,
  NetworksTitle,
  List,
  Text,
  Link,
} from './SocNetworks.styled';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function SocNetworks({ iconSize }) {
  return (
    <Wrapper>
      <NetworksTitle>
        Напишіть, подзвоніть нам чи залиште відгук в соцмережах
      </NetworksTitle>
      <List>
        <FlexWrapper>
          <IoMdMail size={iconSize} color={'#5162c4'} />
          <Link href="mailto:ibambutsa@gmail.com" ariaLabel="email">
            <Text>
              <b>ibambutsa@gmail.com</b>
            </Text>
          </Link>
        </FlexWrapper>
        <FlexWrapper>
          <FaPhoneAlt size={iconSize} color={'#5162c4'} />
          <Link href="tel:+380678044780" ariaLabel="phone number">
            <Text>
              <b>+38(067) 804-47-80</b>
            </Text>
          </Link>
        </FlexWrapper>
        <FlexWrapper>
          <BsInstagram size={iconSize} color={'#5162c4'} />
          <Link
            href="https://www.instagram.com/franz_zacher/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text>
              <b>Instagram</b>
            </Text>
          </Link>
        </FlexWrapper>
        <FlexWrapper>
          <BsFacebook size={iconSize} color={'#5162c4'} />
          <Link
            href="https://www.facebook.com/FranzSacherLviv/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text>
              <b>Facebook</b>
            </Text>
          </Link>
        </FlexWrapper>
      </List>
    </Wrapper>
  );
}
