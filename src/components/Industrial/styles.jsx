import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 80px 0;
  box-sizing: border-box;
  background-color: var(--color-light-blue);
  color: var(--color-dark-blue);
  @media screen and (max-width: 1230px) {
    padding: 60px 0;
  }
  @media screen and (max-width: 710px) {
    padding: 40px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  @media screen and (max-width: 1230px) {
    max-width: 690px;
  }
  @media screen and (max-width: 710px) {
    max-width: 288px;
  }
`;

export const Title = styled.h2`
  min-height: 68px;
  margin: 0 auto;
  font: var(--header-36);
  text-align: center;
  letter-spacing: var(--letter-spacing-1);
  text-transform: uppercase;
  @media screen and (max-width: 1230px) {
    min-height: 33px;
    font: var(--header-24);
    letter-spacing: var(--letter-spacing-06);
  }
  @media screen and (max-width: 710px) {
    min-height: 22px;
    font: var(--header-16);
  }
`;

export const ClabContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin: 60px auto 0 auto;
  @media screen and (max-width: 1230px) {
    margin: 30px auto 0 auto;
  }
  @media screen and (max-width: 710px) {
    flex-direction: column-reverse;
    margin: 20px auto 0 auto;
  }
`;

export const LabContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 20px;
  @media screen and (max-width: 1230px) {
    max-width: 330px;
  }
  @media screen and (max-width: 710px) {
    max-width: 288px;
  }
`;

export const Note = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
  font: var(--main-18);
  letter-spacing: var(--letter-spacing-1);
  @media screen and (max-width: 1230px) {
    font: var(--main-14-20);
  }
  @media screen and (max-width: 710px) {
    font: var(--main-12);
  }
`;

export const NoteContaner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const NoteShare = styled(Note)`
  font: var(--main-18-26-light);
  @media screen and (max-width: 1230px) {
    font: var(--main-14-20-light);
  }
  @media screen and (max-width: 710px) {
    font: var(--main-12);
  }
`;

export const ClabPhotos = styled.div`
  display: flex;
  gap: 12px;
`;

export const Image = styled.img`
  width: 264px;
  height: 276px;
  border-radius: 10px;
  object-fit: cover;
  @media screen and (max-width: 1230px) {
    width: 330px;
    height: 240px;
    &:nth-of-type(1) {
      display: none;
    }
  }
  @media screen and (max-width: 710px) {
    width: 288px;
    height: 180px;
  }
`;

export const LinesCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 80px auto 0 auto;
  color: var(--color-blue);
  @media screen and (max-width: 1230px) {
    margin: 50px auto 0 auto;
  }
  @media screen and (max-width: 710px) {
    margin: 20px auto 0 auto;
    gap: 8px;
  }
`;
