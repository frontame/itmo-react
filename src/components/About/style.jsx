import styled from 'styled-components';
import image from '../../images/about-bg.png';

export const Container = styled.section`
  width: 100%;
  background-color: var(--color-blue);
  color: white;
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    box-sizing: border-box;
  }
`;
export const Wrapper = styled.div`
  padding-block: 92px 101px;
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 768px) {
    padding-block: 92px 81px;
  }

  @media (max-width: 500px) {
    padding-block: 30px 54px;
  }
`;
export const Top = styled.div`
  width: 100%;
  max-width: 445px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  margin: 0 165px 125px auto;

  @media (max-width: 768px) {
    margin: 0 auto 120px 39px;
  }

  @media (max-width: 500px) {
    gap: 16px;
    margin: 0 auto 60px;
    max-width: 288px;
  }
`;
export const Heading = styled.h1`
  font: var(--main-header-54-bold);
  color: var(--color-white);

  span {
    font: var(--main-header-54);
  }

  @media (max-width: 500px) {
    font: var(--main-header-32-bold);

    span {
      font: var(--main-header-32);
    }
  }
`;
export const Subtitle = styled.p`
  font: var(--main-18);
  font-size: 20px;
  margin-bottom: 38px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 28px;
    max-width: 400px;
  }
`;
export const Button = styled.div`
  border: 1px solid var(--color-white);
  border-radius: 10px;
  padding: 15px 16px;
  max-width: 350px;
  text-transform: uppercase;
  font: var(--header-18);
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 330px;
  }

  @media (max-width: 500px) {
    font: var(--header-14);
    padding: 12.5px 16px;
    max-width: 288px;
  }
`;
export const CardsHeading = styled.h2`
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  font: var(--header-36);

  @media (max-width: 768px) {
    font: var(--header-24);
  }

  @media (max-width: 500px) {
    font: var(--header-16);
  }
`;
export const CardsIntro = styled.p`
  margin: 0 auto;

  max-width: 907px;
  padding-block: 30px 45px;
  font: var(--main-18);

  @media (max-width: 1050px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    font: var(--main-14-20);
  }

  @media (max-width: 500px) {
    font: var(--main-12);
  }
`;
export const CardsList = styled.div`
  margin: 0 auto;

  max-width: 1110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  color: var(--color-blue);
  overflow-x: scroll;

  @media (max-width: 1220px) {
    margin-inline: 39px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    gap: 30px;
    max-width: 90%;
  }

  @media (max-width: 500px) {
    margin-inline: 0;

    gap: 10px;
  }
`;
export const Card = styled.div`
  flex-grow: 1;
  background-color: var(--color-light-blue);
  border-radius: 10px;
  padding: 20px;
  min-width: 348px;

  @media (max-width: 768px) {
    min-width: 330px;
  }

  @media (max-width: 500px) {
    padding: 16px;
    min-width: 288px;
  }
`;
export const CardDate = styled.p`
  font: var(--accent-14);
  color: var(--color-emerald);
  margin-bottom: 8px;

  @media (max-width: 500px) {
    font: var(--accent-12);
  }
`;
export const CardHeading = styled.h3`
  border-bottom: 1px solid var(--color-emerald);
  padding-bottom: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font: var(--header-18);

  @media (max-width: 500px) {
    font: var(--header-14);
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
`;
export const CardText = styled.p`
  font: var(--main-14-19);

  @media (max-width: 500px) {
    font: var(--main-12);
  }
`;
export const Pin = styled.img`
  display: block;
`;
