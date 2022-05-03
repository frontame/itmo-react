import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Section, Container, Title } from './styles';
import store from '../../store/store';
import Publication from '../Publication';

function Publications() {
  const { data } = store.publications;

  return (
    <Section>
      <Container>
        <Title>Публикации</Title>
        <Swiper spaceBetween={30} slidesPerView={3}>
          {data.map((publication) => (
            <SwiperSlide key={publication.id}>
              <Publication data={publication} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
}

export default Publications;
