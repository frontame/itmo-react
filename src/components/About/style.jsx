import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: var(--color-blue);
  color: white;
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
`;
export const Top = styled.div`
  width: 100%;
  max-width: 445px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  margin: 0 165px 0 auto;
`;
export const Heading = styled.h1`
  font: var(--main-header-54-bold);
  color: var(--color-white);

  span {
    font: var(--main-header-54);
  }
`;
export const Subtitle = styled.p`
  font: var(--main-18);
  font-size: 20px;
  margin-bottom: 38px;
`;
export const Button = styled.div`
  border: 1px solid var(--color-white);
  border-radius: 10px;
  padding: 16px 15px;
  width: 350px;
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
`;
export const CardsHeading = styled.h2``;
export const CardsIntro = styled.p``;
export const CardsList = styled.div`
  margin: 0 164px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;
export const Card = styled.div`
  flex-grow: 1;
`;
export const CardDate = styled.p``;
export const CardHeading = styled.h3``;
export const CardText = styled.p``;
export const Pin = styled.img`
  display: block;
`;
