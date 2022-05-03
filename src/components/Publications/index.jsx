import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { v4 as uuidv4 } from 'uuid';
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
          {data.map((publication) => {
            const uid = uuidv4();
            return (
              <SwiperSlide key={uid}>
                <Publication data={publication} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Section>
  );
}

export default Publications;
