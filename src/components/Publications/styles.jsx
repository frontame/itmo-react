import styled from 'styled-components';

export const Section = styled.section`
  background-color: #e0f0ff;
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
  font-family: OpenSans;
  font-size: 36px;
  line-height: 68px;
  font-weight: 600;
  letter-spacing: 0.10000000149011612px;
  text-transform: uppercase;
  margin: 0 0 30px;
  text-align: center;
  color: #000d26;

  @media (max-width: 1280px) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
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
