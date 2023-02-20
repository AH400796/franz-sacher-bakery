import { useState } from 'react';
import {
  SliderWrapper,
  Wrapper,
  Button,
  ButtonText,
  Title,
  ProductList,
  ProductListItem,
  ProductText,
} from './Gallery.styled';
import Slider from 'components/Slider';
import Modal from 'components/Modal';
import galleryBtn from '../../images/gallery_btn.png';

export default function Gallery({ screenWidth }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  let sliderWidth = null;
  if (screenWidth < 768) {
    sliderWidth = screenWidth * 0.8;
  } else {
    sliderWidth = screenWidth * 0.7;
  }

  return (
    <Wrapper>
      {showModal && (
        <Modal onClose={toggleModal}>
          <SliderWrapper sliderWidth={sliderWidth}>
            <Slider />
          </SliderWrapper>
        </Modal>
      )}
      <Button type="button" onClick={toggleModal}>
        <ButtonText>Галерея</ButtonText>
        <img src={galleryBtn} alt="" width={40} />
      </Button>
      <Title>
        Наша пекарня <br /> пропонує Вам:
      </Title>
      <ProductList>
        <ProductListItem>
          <ProductText>Торти</ProductText>
        </ProductListItem>
        <ProductListItem>
          <ProductText>Випічку</ProductText>
        </ProductListItem>
        <ProductListItem>
          <ProductText>Печиво</ProductText>
        </ProductListItem>
        <ProductListItem>
          <ProductText>Круасани</ProductText>
        </ProductListItem>
        <ProductListItem>
          <ProductText>Пиріжки</ProductText>
        </ProductListItem>
        <ProductListItem>
          <ProductText>Десерти</ProductText>
        </ProductListItem>
        <ProductListItem>
          <ProductText>І ще багато всього</ProductText>
        </ProductListItem>
      </ProductList>
    </Wrapper>
  );
}
