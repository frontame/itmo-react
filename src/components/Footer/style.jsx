import styled from 'styled-components';
import logoDesktop from '../../images/LogoDesktop.png';
import logoTablet from '../../images/LogoTablet.png';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark-blue);
  color: var(--color-white);
`;
export const Grid = styled.div`
  box-sizing: border-box;
  padding-block: 80px;
  padding-inline: auto;

  display: grid;
  column-gap: 150px;
  row-gap: 37px;
  grid-template-columns: 263px 95px 95px 206px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
    font: var(--main-14-19);
  }

  li {
    margin-bottom: 8px;
    font: var(--main-14-19);
  }

  li:last-of-type {
    margin-bottom: 0px;
  }

  h3 {
    margin: 0;
    margin-bottom: 12px;
    font: var(--header-14);
  }

  h4 {
    margin: 0;
    margin-bottom: 12px;
    font: var(--header-16);
  }

  @media (max-width: 1150px) {
    column-gap: 100px;
  }
  @media (max-width: 1000px) {
    column-gap: 50px;
    grid-template-columns: 204px 80px 80px 206px;
  }
  @media (max-width: 850px) {
    padding-block: 60px;
    column-gap: 40px;
    row-gap: 30px;
  }
  @media (max-width: 768px) {
    p {
      font: var(--main-12-20);
    }

    li {
      font: var(--main-12-20);
    }

    h3 {
      font: var(--header-12);
    }

    h4 {
      font: var(--header-18);
    }
  }
  @media (max-width: 710px) {
    padding-block: 40px 33px;
    column-gap: 0px;
    row-gap: 40px;
    grid-template-columns: 140px 140px;

    h4 {
      font: var(--header-14);
    }
  }
`;
export const Icons = styled.div`
  display: flex;
  margin-top: 90px;
  gap: 10px;
`;
export const Logo = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;

  width: 150px;
  height: 54px;
  background-image: url(${logoDesktop});
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 710px) {
    width: 95px;
    height: 32px;
    background-image: url(${logoTablet});
  }
`;

export const TextContainer = styled.p`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;

  @media (max-width: 710px) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }
`;
export const AboutContainer = styled.p`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  grid-row-end: 3;

  @media (max-width: 710px) {
    display: none;
  }
`;
export const List1 = styled.ul`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;

  @media (max-width: 710px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
  }
`;
export const List2 = styled.ul`
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;

  @media (max-width: 710px) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }
`;
export const List3 = styled.ul`
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;

  @media (max-width: 710px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
  }
`;
export const TextDarkContainer = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 4;

  opacity: 0.5;

  @media (max-width: 710px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 4;
  }
`;
