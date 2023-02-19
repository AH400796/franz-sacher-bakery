import styled from 'styled-components';

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20px;
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
  border: 1px dotted #453432;
  border-radius: 10px;
  background-color: #fffdd0;

  object-fit: cover;

  @media screen and (min-width: 480px) {
    flex-basis: calc(100% - 300px);
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const AboutTitle = styled.h2`
  font-family: 'Marck Script', cursive;
  text-align: center;
  font-size: 24px;
  padding-bottom: 15px;
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
  /* display: block; */
  padding: 10px;

  @media screen and (min-width: 768px) {
    /* min-width: 338px; */
  }
  @media screen and (min-width: 1280px) {
    /* min-width: 450px; */
  }
`;

export const AboutImage = styled.img`
  display: block;
  /* min-width: 250px; */
  border-radius: 10px;
  border: 1px dotted #453432;

  @media screen and (min-width: 768px) {
    /* min-width: 338px; */
  }
  @media screen and (min-width: 1280px) {
    /* min-width: 450px; */
  }
`;