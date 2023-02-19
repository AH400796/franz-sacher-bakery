import {
  Wrapper,
  AddressText,
  FlexWrapper,
  AddressTitle,
  List,
  Button,
} from './Address.styled';
import { TiLocation } from 'react-icons/ti';
import { FcGoogle } from 'react-icons/fc';

export default function Address({ iconSize, handleOnClick }) {
  return (
    <Wrapper>
      <AddressTitle>
        Завітайте до нас та спробуйте нашу свіженьку випічку
      </AddressTitle>
      <List>
        <FlexWrapper>
          <TiLocation size={iconSize} color={'#5162c4'} />
          <AddressText>
            <b>м. Львів, вул. Глибока, 4</b>
          </AddressText>
        </FlexWrapper>
        <FlexWrapper>
          <FcGoogle size={iconSize} />
          <Button type="button" onClick={handleOnClick}>
            Ми на Google Maps
          </Button>
        </FlexWrapper>
      </List>
    </Wrapper>
  );
}
