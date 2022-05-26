import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => {
    return props.theme.bgColorSecondaryLight;
  }};
  padding: 80px 0 370px;

  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 290px;
  }

  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 245px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1109px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font: var(--header-36);
  letter-spacing: var(--letter-spacing-1);
  color: ${(props) => {
    return props.theme.primaryColorDark;
  }};
  text-transform: uppercase;
  margin: 0 0 30px;
  text-align: center;

  @media (max-width: 1280px) {
    font: var(--header-24);
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font: var(--header-16);
    margin-bottom: 20px;
  }
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`;

export const ScrollList = styled.ul`
  list-style: none;
  margin: 0;
  display: inline-grid;
  column-gap: 30px;
  grid-auto-flow: column;

  @media (max-width: 480px) {
    column-gap: 8px;
  }
`;
