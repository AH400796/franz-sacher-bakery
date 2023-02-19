import styled from 'styled-components';
import ornament from '../../image/ornament.png';

export const StyledFooter = styled.footer`
  padding-top: 30px;
  flex-shrink: 0;
  text-align: center;
  color: #555551;
  background-color: #feffe1;
  background-image: url(${ornament});
  background-position: center;
  background-repeat: repeat-x;

  background-clip: border-box;

  box-shadow: 2px -3px 7px #8a8a8a;
`;

export const FooterText = styled.p`
  color: #453432;
  padding-top: 15px;
  padding-bottom: 10px;
  font-size: 12px;
`;

export const FooterContacts = styled.ul`
  justify-content: center;
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const Wrapper = styled.li`
  border: none;
  border-radius: 50%;
  background-color: #feffe1;
  box-shadow: 2px 2px 7px 3px #453432;

  &:hover,
  &:focus {
    background-color: #d8a331;
  }
`;

export const IconWrapper = styled.div`
  padding: 8px;
`;
