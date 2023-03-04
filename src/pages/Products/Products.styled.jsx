import styled from 'styled-components';
import markerCake from '../../images/markers/cake.svg';
import markerStrudel from '../../images/markers/strudel.svg';
import markerCookies from '../../images/markers/cookies.svg';
import markerCheesecake from '../../images/markers/cheesecake.svg';
import markerDessert from '../../images/markers/dessert.svg';
import markerBread from '../../images/markers/bread.svg';
import markerCroissant from '../../images/markers/croissant.svg';
import markerHotDrink from '../../images/markers/hot-drink.svg';
import markerColdDrink from '../../images/markers/cold-drink.svg';
import markerLemonade from '../../images/markers/lemonade.svg';
import markerMilkshake from '../../images/markers/milkshake.svg';
import markerIcecream from '../../images/markers/icecream.svg';
import markerSupplements from '../../images/markers/food-supplements.svg';
import markerAlcohol from '../../images/markers/alcohol.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #feffe1;
  box-shadow: 3px 3px 9px 5px #453432;
  border-radius: 2px;
  height: 100%;
  padding-bottom: 100px;
`;
export const SliderWrapper = styled.div`
  display: block;
  width: ${props => {
    return `${props.sliderWidth}px`;
  }};

  @media screen and (min-width: 1280px) {
    width: 850px;
  }
`;

export const Title = styled.h3`
  display: inline;
  text-align: center;
  padding: 0 10px;
  margin-bottom: 20px;
  font-family: 'Marck Script', cursive;
  font-size: 20px;
  color: #453432;

  @media screen and (min-width: 480px) {
    padding: 0 20px;
    margin-bottom: 25px;
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 30px;
    margin-bottom: 30px;
    font-size: 28px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 24px;

  background-color: #453432;
  box-shadow: 0px 0px 5px 2px #d8a331;
  border: 2px solid #d8a331;
  border-radius: 5px;

  cursor: pointer;

  @media screen and (min-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 25px;
  }
`;

export const ButtonText = styled.span`
  font-family: 'Marck Script', cursive;
  font-size: inherit;
  color: #feffe1;
`;

export const ButtonImg = styled.img`
  width: 35%;
`;

export const CoffeeImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  background-color: #453432;
  border: 2px solid #d8a331;
`;

export const CoffeeImg = styled.img`
  width: 80px;
`;

export const ProductList = styled.ul`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  list-style: none;
  font-size: 14px;
  color: #453432;

  @media screen and (min-width: 480px) {
    padding: 0 30px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 40px;
    font-size: 20px;
  }
`;

export const ProductListItem = styled.li`
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 480px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

export const SubList = styled.ul`
  padding: 10px 10px 5px 50px;
  border-radius: 20px;
  font-size: 12px;
  color: #feffe1;
  background-color: #453432;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Details = styled.details`
  width: 100%;
`;
export const Summary = styled.summary`
  margin-bottom: 10px;
  font-weight: 600;
  text-decoration: underline dotted 1px;
`;

export const SubCakeItem = styled.li`
  list-style: url(${markerCake});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubStrudelItem = styled.li`
  list-style: url(${markerStrudel});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubCookiesItem = styled.li`
  list-style: url(${markerCookies});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubCheesecakeItem = styled.li`
  list-style: url(${markerCheesecake});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubDessertItem = styled.li`
  list-style: url(${markerDessert});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubBreadItem = styled.li`
  list-style: url(${markerBread});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubCroissantItem = styled.li`
  list-style: url(${markerCroissant});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubCoffeeItem = styled.li`
  list-style: url(${markerHotDrink});
  margin-bottom: 10px;
  padding-left: 10px;
`;
export const SubColdCoffeeItem = styled.li`
  list-style: url(${markerColdDrink});
  margin-bottom: 10px;
  padding-left: 10px;
`;
export const SubLemonadeItem = styled.li`
  list-style: url(${markerLemonade});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubMilkshakeItem = styled.li`
  list-style: url(${markerMilkshake});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubIcecreamItem = styled.li`
  list-style: url(${markerIcecream});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubSupplementsItem = styled.li`
  list-style: url(${markerSupplements});
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const SubAlcoItem = styled.li`
  list-style: url(${markerAlcohol});
  margin-bottom: 10px;
  padding-left: 10px;
`;
