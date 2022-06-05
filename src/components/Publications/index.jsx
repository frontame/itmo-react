/* eslint-disable react/jsx-curly-brace-presence */
import { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Section, Container, Title } from './styles';
import store from '../../store/store';
import SwipeButton from '../Ui/SwipeButton';
import HideSwiperButton from '../HideSwiperButton';
import Publication from '../Publication';
import './styles.css';

const Publications = () => {
  const { data } = store.publications;

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const handlePrevClick = useCallback(() => {
    prevButtonRef.current.click();
  }, [prevButtonRef]);

  const handleNextClick = useCallback(() => {
    nextButtonRef.current.click();
  }, [nextButtonRef]);

  return (
    <Section>
      <Container>
        <Title>Публикации</Title>
        {
          <>
            <SwipeButton
              design="light"
              direction="prev"
              onClick={handlePrevClick}
            />
            <SwipeButton
              design="light"
              direction="next"
              onClick={handleNextClick}
            />
            <Swiper
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  centeredSlides: false,
                  spaceBetween: 30,
                },
                320: {
                  centeredSlides: true,
                  spaceBetween: 8,
                  slidesPerView: 'auto',
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <HideSwiperButton direction="prev" refProp={prevButtonRef} />
              <HideSwiperButton direction="next" refProp={nextButtonRef} />
              {data.map((publication) => {
                return (
                  <SwiperSlide key={publication.uid}>
                    <Publication data={publication} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        }
      </Container>
    </Section>
  );
};

export default Publications;
