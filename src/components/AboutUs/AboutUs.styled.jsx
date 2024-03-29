import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 120px 20px;
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20px;
`;

export const AboutLink = styled(Link)`
  text-decoration: none;
  color: #db9808;
`;

export const AboutListItem = styled.li`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-basis: calc(100% - 160px);
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

export const ItemWrappper = styled.div`
  display: block;

  border-radius: 2px;
  background-color: #fffbb5;
  border: 1px dotted #453432;

  object-fit: contain;

  @media screen and (min-width: 480px) {
    flex-basis: calc(100% - 300px);
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const AboutImage = styled.img`
  display: block;
  object-fit: cover;

  border-radius: 2px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AboutTitle = styled.h2`
  font-family: 'Marck Script', cursive;
  text-align: center;
  font-size: 24px;
  padding-bottom: 15px;
  color: #db9808;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 34px;
    padding-bottom: 25px;
  }
`;

export const AboutText = styled.p`
  text-indent: 20px;
  padding-bottom: 5px;
`;

export const TextWrapper = styled.div`
  padding: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
