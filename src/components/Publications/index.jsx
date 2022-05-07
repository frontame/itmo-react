import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { v4 as uuidv4 } from 'uuid';
import {
  Section,
  Container,
  Title,
  ScrollContainer,
  ScrollList,
} from './styles';
import store from '../../store/store';
import SwiperButton from '../SwiperButton';
import HideSwiperButton from '../HideSwiperButton';
import Publication from '../Publication';

const Publications = () => {
  const { data } = store.publications;

  const [swiperEnabled, setSwiperEnabled] = useState(true);

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const handlePrevClick = () => {
    prevButtonRef.current.click();
  };

  const handleNextClick = () => {
    nextButtonRef.current.click();
  };

  useEffect(() => {
    const screenWidth = document.documentElement.clientWidth;

    if (screenWidth < 1280) setSwiperEnabled(false);
  }, []);

  return (
    <Section>
      <Container>
        <Title>Публикации</Title>

        {swiperEnabled > 0 ? (
          <>
            {/* Desktop version with swiperjs */}
            <SwiperButton direction="prev" onClick={handlePrevClick} />
            <SwiperButton direction="next" onClick={handleNextClick} />
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              pagination
              modules={[Pagination]}
            >
              <HideSwiperButton direction="prev" refProp={prevButtonRef} />
              <HideSwiperButton direction="next" refProp={nextButtonRef} />
              {data.map((publication) => {
                const uid = uuidv4();
                return (
                  <SwiperSlide key={uid}>
                    <Publication data={publication} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        ) : (
          <ScrollContainer>
            {/* Tablet and mobile version without swiperjs */}
            <ScrollList>
              {data.map((publication) => {
                const uid = uuidv4();
                return <Publication data={publication} key={uid} />;
              })}
            </ScrollList>
          </ScrollContainer>
        )}
      </Container>
    </Section>
  );
};

export default Publications;
