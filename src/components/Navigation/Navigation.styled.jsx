import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Marck Script', cursive;
  font-size: 16px;
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

  &:hover,
  &:focus {
    color: #d8a331;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
