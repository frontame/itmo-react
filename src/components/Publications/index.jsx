import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { v4 as uuidv4 } from 'uuid';
import { Section, Container, Title } from './styles';
import store from '../../store/store';
import Publication from '../Publication';

const Publications = () => {
  const { data } = store.publications;

  return (
    <Section>
      <Container>
        <Title>Публикации</Title>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination
          modules={[Pagination]}
        >
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
};

export default Publications;
