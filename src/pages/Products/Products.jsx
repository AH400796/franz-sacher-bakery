import { useState } from 'react';
import {
  SliderWrapper,
  CoffeeImgWrapper,
  Wrapper,
  Button,
  ButtonText,
  ButtonImg,
  CoffeeImg,
  Title,
  ProductList,
  ProductListItem,
  SubBreadItem,
  SubCakeItem,
  SubDessertItem,
  SubCoffeeItem,
  SubColdCoffeeItem,
  SubCroissantItem,
  SubLemonadeItem,
  SubMilkshakeItem,
  SubIcecreamItem,
  SubSupplementsItem,
  SubCheesecakeItem,
  SubCookiesItem,
  SubStrudelItem,
  SubAlcoItem,
  SubList,
  Details,
  Summary,
} from './Products.styled';
import Slider from 'components/Slider';
import Modal from 'components/Modal';
import ProductsBtn from '../../images/gallery_btn.png';
import coffeCup from '../../images/coffee.svg';

export default function Products({ screenWidth }) {
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
        <ButtonImg src={ProductsBtn} alt="" width={40} />
      </Button>
      <Title>
        Наша пекарня радо запропонує Вам широкий асортимент продукції:
      </Title>
      <ProductList>
        <ProductListItem>
          <Details>
            <Summary>Торти</Summary>
            <SubList>
              <SubCakeItem>«Захер»</SubCakeItem>
              <SubCakeItem>«Естерхазі»</SubCakeItem>
              <SubCakeItem>«Київський»</SubCakeItem>
              <SubCakeItem>«Корівка»</SubCakeItem>
              <SubCakeItem>«Наполеон»</SubCakeItem>
              <SubCakeItem>«Спартак»</SubCakeItem>
              <SubCakeItem>«Три шоколади»</SubCakeItem>
              <SubCakeItem>«Пташине молоко»</SubCakeItem>
              <SubCakeItem>«Червоний оксамит»</SubCakeItem>
              <SubCakeItem>«П`яна вишня»</SubCakeItem>
              <SubCakeItem>«Опера»</SubCakeItem>
              <SubCakeItem>«Мангово-персиковий»</SubCakeItem>
              <SubCakeItem>«Маково-полуничний»</SubCakeItem>
              <SubCakeItem>«Медовий з чорносливом»</SubCakeItem>
              <SubCakeItem>«Шпинатний з малиною»</SubCakeItem>
              <SubCakeItem>«Морквяний з пряною грушею»</SubCakeItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary>Пироги та штруделі</Summary>
            <SubList>
              <SubStrudelItem>Штрудель «З грушею»</SubStrudelItem>
              <SubStrudelItem>Штрудель «Вишневий»</SubStrudelItem>
              <SubStrudelItem>Штрудель «Яблучний»</SubStrudelItem>
              <SubStrudelItem>Пиріг «Яворівський»</SubStrudelItem>
              <SubStrudelItem>Пиріг «З куркою»</SubStrudelItem>
              <SubStrudelItem>Пиріг «Зі шпинатом та сиром фета»</SubStrudelItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary>Печиво та тістечка</Summary>
            <SubList>
              <SubCookiesItem>Печиво «Шоколадні тріщинки»</SubCookiesItem>
              <SubCookiesItem>Печиво «Вівсяне»</SubCookiesItem>
              <SubCookiesItem>Печиво «Горішки»</SubCookiesItem>
              <SubCookiesItem>Печиво «Мигдальне»</SubCookiesItem>
              <SubCookiesItem>Печиво «Пісочно-горіхове»</SubCookiesItem>
              <SubCookiesItem>Печиво «Поцілуночки»</SubCookiesItem>
              <SubCookiesItem>Печиво «Рогалик зі смородиною»</SubCookiesItem>
              <SubCookiesItem>Печиво «Грибочки»</SubCookiesItem>
              <SubCookiesItem>Тістечко «Ласун»</SubCookiesItem>
              <SubCookiesItem>Тістечко «Пікова дама»</SubCookiesItem>
              <SubCookiesItem>Пряники «Імбирні»</SubCookiesItem>
              <SubCookiesItem>Трубочки «З заварним кремом»</SubCookiesItem>
              <SubCookiesItem>Вафлі «Домашні»</SubCookiesItem>
              <SubCookiesItem>Зефір «Яблучно-полуничний»</SubCookiesItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary>Пляцки та сирники</Summary>
            <SubList>
              <SubCheesecakeItem>Пляцок «Медовий»</SubCheesecakeItem>
              <SubCheesecakeItem>Пляцок «Пані Валевська»</SubCheesecakeItem>
              <SubCheesecakeItem>Сирник «Львівський»</SubCheesecakeItem>
              <SubCheesecakeItem>Чіз-кейк «Нью-Йорк»</SubCheesecakeItem>
              <SubCheesecakeItem>Слойка «З яблуками»</SubCheesecakeItem>
            </SubList>
          </Details>
        </ProductListItem>

        <ProductListItem>
          <Details>
            <Summary>Десерти</Summary>
            <SubList>
              <SubDessertItem>Десерт «Шварцвальд»</SubDessertItem>
              <SubDessertItem>Десерт «Тірамісу»</SubDessertItem>
              <SubDessertItem>Десерт «Блек Джек»</SubDessertItem>
              <SubDessertItem>Десерт «Фрезьє»</SubDessertItem>
              <SubDessertItem>Десерт «Картоплинка»</SubDessertItem>
              <SubDessertItem>Панакота «Імбирно-апельсинова»</SubDessertItem>
              <SubDessertItem>Панакота «Вишнева»</SubDessertItem>
              <SubDessertItem>Буше «Обліпихове»</SubDessertItem>
              <SubDessertItem>Тарталетка «Лимонна»</SubDessertItem>
            </SubList>
          </Details>
        </ProductListItem>

        <ProductListItem>
          <Details>
            <Summary>Хлібобулочні вироби</Summary>
            <SubList>
              <SubBreadItem>«Шварцвальд»</SubBreadItem>
              <SubBreadItem>«Тірамісу»</SubBreadItem>
              <SubBreadItem>«Блек Джек»</SubBreadItem>
              <SubBreadItem>«Фрезьє»</SubBreadItem>
              <SubBreadItem>«Картоплинка»</SubBreadItem>
              <SubBreadItem>«Імбирно-апельсинова»</SubBreadItem>
              <SubBreadItem>«Вишнева»</SubBreadItem>
              <SubBreadItem>бліпихове»</SubBreadItem>
              <SubBreadItem>тка «Лимонна»</SubBreadItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary> Пиріжки та круасани</Summary>
            <SubList>
              <SubCroissantItem>«Шварцвальд»</SubCroissantItem>
              <SubCroissantItem>«Тірамісу»</SubCroissantItem>
              <SubCroissantItem>«Блек Джек»</SubCroissantItem>
              <SubCroissantItem>«Фрезьє»</SubCroissantItem>
              <SubCroissantItem>«Картоплинка»</SubCroissantItem>
              <SubCroissantItem>«Імбирно-апельсинова»</SubCroissantItem>
              <SubCroissantItem>«Вишнева»</SubCroissantItem>
              <SubCroissantItem>бліпихове»</SubCroissantItem>
              <SubCroissantItem>тка «Лимонна»</SubCroissantItem>
            </SubList>
          </Details>
        </ProductListItem>
      </ProductList>
      <Title>
        А також у нас Ви знайдете широкий перелік гарячих, холодних та
        алкогольних напоїв:
      </Title>
      <ProductList>
        <ProductListItem>
          <Details>
            <Summary>Гарячі напої (класичні)</Summary>
            <SubList>
              <SubCoffeeItem>«Еспресо»</SubCoffeeItem>
              <SubCoffeeItem>«Американо»</SubCoffeeItem>
              <SubCoffeeItem>«Допіо»</SubCoffeeItem>
              <SubCoffeeItem>«Рістретто»</SubCoffeeItem>
              <SubCoffeeItem>«Капучіно»</SubCoffeeItem>
              <SubCoffeeItem>«Лате»</SubCoffeeItem>
              <SubCoffeeItem>«Флет-вайт»</SubCoffeeItem>
              <SubCoffeeItem>«Какао»</SubCoffeeItem>
              <SubCoffeeItem>«Гарячий шоколад»</SubCoffeeItem>
              <SubCoffeeItem>«Мокачіно»</SubCoffeeItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary>Гарячі напої (унікальні)</Summary>
            <SubList>
              <SubCoffeeItem>«Кава по-віденськи»</SubCoffeeItem>
              <SubCoffeeItem>«Кава по-ірландськи»</SubCoffeeItem>
              <SubCoffeeItem>«Динно-карамельне капучіно»</SubCoffeeItem>
              <SubCoffeeItem>«М`ятне капучіно»</SubCoffeeItem>
              <SubCoffeeItem>«Лате зі смородиною»</SubCoffeeItem>
              <SubCoffeeItem>«Раф кава»</SubCoffeeItem>
            </SubList>
          </Details>
        </ProductListItem>

        <ProductListItem>
          <Details>
            <Summary>Холодні кавові напої</Summary>
            <SubList>
              <SubColdCoffeeItem>«Фрапе»</SubColdCoffeeItem>
              <SubColdCoffeeItem>«Глясе»</SubColdCoffeeItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary>Чай (класичний)</Summary>
            <SubList>
              <SubCoffeeItem>«Чорний»</SubCoffeeItem>
              <SubCoffeeItem>«Зелений»</SubCoffeeItem>
              <SubCoffeeItem>«Фруктовий»</SubCoffeeItem>
              <SubCoffeeItem>«Трав'яний»</SubCoffeeItem>
            </SubList>
          </Details>
        </ProductListItem>

        <ProductListItem>
          <Details>
            <Summary>Чай (вітамінний)</Summary>
            <SubList>
              <SubCoffeeItem>«Журавлина з апельсином»</SubCoffeeItem>
              <SubCoffeeItem>«Обліпиха з яблуком»</SubCoffeeItem>
              <SubCoffeeItem>«Імбир з медом та лаймом»</SubCoffeeItem>
              <SubCoffeeItem>«Обліпиха з чебрецем»</SubCoffeeItem>
              <SubCoffeeItem>«Апельсин з м`ятою»</SubCoffeeItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary>Лимонади</Summary>
            <SubList>
              <SubLemonadeItem>«Класичний»</SubLemonadeItem>
              <SubLemonadeItem>«Болото»</SubLemonadeItem>
              <SubLemonadeItem>«Тропічний»</SubLemonadeItem>
              <SubLemonadeItem>«Мохіто алкогольний»</SubLemonadeItem>
              <SubLemonadeItem>«Мохіто безалкогольний»</SubLemonadeItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary>Молочні коктейлі</Summary>
            <SubList>
              <SubMilkshakeItem>«Класичний»</SubMilkshakeItem>
              <SubMilkshakeItem>«Банановий»</SubMilkshakeItem>
              <SubMilkshakeItem>«Королівський»</SubMilkshakeItem>
              <SubMilkshakeItem>«Ягідний»</SubMilkshakeItem>
              <SubMilkshakeItem>«Кавовий»</SubMilkshakeItem>
            </SubList>
          </Details>
        </ProductListItem>

        <ProductListItem>
          <Details>
            <Summary>Морозиво</Summary>
            <SubList>
              <SubIcecreamItem>«Класичне»</SubIcecreamItem>
              <SubIcecreamItem>«З вишнею»</SubIcecreamItem>
              <SubIcecreamItem>
                «З шоколадом і грецьким горіхом»
              </SubIcecreamItem>
            </SubList>
          </Details>
        </ProductListItem>

        <ProductListItem>
          <Details>
            <Summary>Додатки</Summary>
            <SubList>
              <SubSupplementsItem>Вершки</SubSupplementsItem>
              <SubSupplementsItem>Мед</SubSupplementsItem>
              <SubSupplementsItem>
                Сироп фруктовий в асортименті
              </SubSupplementsItem>
              <SubSupplementsItem>Лимон</SubSupplementsItem>
            </SubList>
          </Details>
        </ProductListItem>
        <ProductListItem>
          <Details>
            <Summary>Алкогольні напої</Summary>
            <SubList>
              <SubAlcoItem>Бренді</SubAlcoItem>
            </SubList>
          </Details>
        </ProductListItem>
      </ProductList>
      <CoffeeImgWrapper>
        <CoffeeImg src={coffeCup} alt="" />
      </CoffeeImgWrapper>
    </Wrapper>
  );
}
