import styled from 'styled-components';
import store from '../../store/store';
import Publication from '../Publication/';

const Section = styled.section`
  background-color: #E0F0FF;
  padding: 80px 0 370px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1109px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: OpenSans;
  font-size: 36px;
  line-height: 68px;
  font-weight: 600;
  letter-spacing: 0.10000000149011612px;
  text-transform: uppercase;
  margin: 0 0 30px;
  text-align: center;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);  
  grid-template-rows: repeat(1, auto);
  gap: 33px;
  width: 100%;
`;

const Publications = () => {
  const { data } = store.publications;

  return(
    <Section>
      <Container>
        <Title>Публикации</Title>
        <List>
          {data.map(publication => <Publication key={publication.id} data={publication} />)}
        </List> 
      </Container>
    </Section>
  );
}

export default Publications;
