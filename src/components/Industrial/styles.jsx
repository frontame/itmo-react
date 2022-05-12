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
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  min-height: 68px;
  margin: 0 auto;
  font: var(--header-36);
  text-align: center;
  letter-spacing: var(--letter-spacing-1);
  text-transform: uppercase;
`;

export const ClabContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin: 60px auto 0 auto;
`;

export const LabContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 20px;
`;

export const Note = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
  font: var(--main-18);
  letter-spacing: var(--letter-spacing-1);
`;

export const NoteContaner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const NoteShare = styled.p`
  font: var(--main-18-26-light);
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
`;

export const LinesCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 80px auto 0 auto;
  color: var(--color-blue);
`;
