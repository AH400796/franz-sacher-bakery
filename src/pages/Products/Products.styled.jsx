import styled from 'styled-components';
import marker from '../../images/cake.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 30px 20px 20px 30px;

  background-color: #feffe1;
  box-shadow: 3px 3px 9px 5px #453432;
  border-radius: 2px;
  height: 100%;
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

export const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  padding: 5px;

  background-color: #453432;
  box-shadow: 0px 0px 5px 2px #d8a331;
  border: 2px solid #d8a331;
  border-radius: 5px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 20px;
    top: 20px;
    width: 160px;
    height: 140px;
    font-size: 32px;
  }
`;

export const ButtonText = styled.span`
  font-family: 'Marck Script', cursive;
  font-size: 20px;
  color: #feffe1;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Title = styled.h3`
  display: inline;
  text-align: left;
  margin-bottom: 20px;
  font-family: 'Marck Script', cursive;
  font-size: 18px;
  color: #453432;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 25px;
  list-style: url(${marker});
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ProductListItem = styled.li``;

export const ProductText = styled.p`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
