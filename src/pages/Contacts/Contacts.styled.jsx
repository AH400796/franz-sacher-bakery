import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    row-gap: 25px;
  }
  @media screen and (min-width: 1280px) {
    row-gap: 30px;
  }
`;

export const ContactsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-basis: calc((100% - 100px) / 2);

  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 30px;
  padding-left: 10px;
  background-color: #feffe1;
  box-shadow: 3px 3px 9px 5px #453432;
  border-radius: 2px;
`;
