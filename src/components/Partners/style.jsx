import styled from 'styled-components';
import basicTheme from '../../themes/basic-theme';

export const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  background-color: ${basicTheme.primaryColor};
  color: ${basicTheme.thirdColor};
`;
export const Container = styled.div`
  box-sizing: border-box;
  margin-inline: auto;
  max-width: 1440px;
`;
export const TextContainer = styled.div`
  margin-inline: auto;
  margin-bottom: 100px;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1110px) {
    max-width: 690px;
    margin-bottom: 60px;
  }
  @media (max-width: 770px) {
    max-width: 288px;
    margin-bottom: 40px;
    gap: 20px;
  }
`;
export const Heading = styled.h2`
  margin: 0 auto;
  text-transform: uppercase;
  font: var(--header-36);

  @media (max-width: 1110px) {
    font: var(--header-24);
  }
  @media (max-width: 770px) {
    font: var(--header-16);
  }
`;
export const Text = styled.p`
  margin: 0;
  font: var(--main-18);

  @media (max-width: 1110px) {
    font: var(--main-14-20);
  }
  @media (max-width: 770px) {
    font: var(--main-12);
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  max-width: 1110px;
  margin: 0 auto;

  padding-bottom: 80px;

  @media (max-width: 1110px) {
    max-width: 690px;
    gap: 30px;
    padding-bottom: 60px;
  }
  @media (max-width: 770px) {
    max-width: 288px;
    gap: 20px;
    padding-bottom: 40px;
  }
`;
