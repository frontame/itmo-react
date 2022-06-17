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
  padding-inline: 165px;
  max-width: 1440px;
`;
export const TextContainer = styled.div`
  margin-inline: auto;
  margin-bottom: 100px;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Heading = styled.h2`
  margin: 0 auto;
  text-transform: uppercase;
  font: var(--header-36);
`;
export const Text = styled.p`
  margin: 0;
  font: var(--main-18);
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;

  padding-bottom: 50px;
`;
