import styled from 'styled-components';

export const Section = styled.section`
  background-color: #e0f0ff;
  padding: 80px 0 370px;

  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 333px;
  }
`;

export const Container = styled.div`
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
`;
