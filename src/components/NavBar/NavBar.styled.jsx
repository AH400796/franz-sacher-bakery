import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-right: 40px; */
  color: #fffacd;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`;

export const Title = styled.span`
  display: block;
  text-align: center;
  font-family: 'Marck Script', cursive;
  font-size: 24px;
  line-height: 0.9;
  @media screen and (max-width: 450px) {
    width: 150px;
  }

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;
export const TitleName = styled.h1`
  font-family: 'Marck Script', cursive;
  font-size: 26px;
  @media screen and (min-width: 480px) {
    font-size: 36px;
  }
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Marck Script', cursive;
  font-size: 20px;
  padding: 8px;
  border-radius: 4px;
  text-align: left;
  text-decoration: none;
  color: #fffdd0;
  font-weight: 600;

  &.active {
    color: #d8a331;
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
