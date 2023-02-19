import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;

  @media screen and (min-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media screen and (min-width: 1280px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const FlexWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  list-style: none;
`;

export const AddressTitle = styled.h4`
  text-align: center;
  font-family: 'Marck Script', cursive;
  font-size: 20px;
  margin-bottom: 20px;
  padding: 5px;

  background-color: #feffe1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const AddressText = styled.p`
  width: 170px;
  font-size: 14px;
  padding: 15px 15px;
  color: #feffe1;
  background-color: #453432;
  border-radius: 0 20px 0 20px;

  box-shadow: 2px 2px 4px #be7f1f, -2px -2px 4px #ffab2b;

  &:hover,
  &:focus {
    background-color: #d8a331;
    color: #453432;
  }

  @media screen and (min-width: 768px) {
    width: 180px;
  }
  @media screen and (min-width: 1280px) {
    width: 190px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 202px;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 15px;
  text-align: left;
  color: #feffe1;
  background-color: #453432;
  border-radius: 0 20px 0 20px;
  border: none;

  box-shadow: 2px 2px 4px #be7f1f, -2px -2px 4px #ffab2b;

  &:hover,
  &:focus {
    background-color: #d8a331;
    color: #453432;
  }

  @media screen and (min-width: 768px) {
    width: 212px;
  }
  @media screen and (min-width: 1280px) {
    width: 222px;
    font-size: 16px;
  }
  cursor: pointer;
`;
