import { useSwiper } from 'swiper/react';
import HideButton from './styles';

const HideSwiperButton = ({ direction, refProp }) => {
  const swiper = useSwiper();

  return (
    <HideButton
      ref={refProp}
      onClick={() => {
        return direction === 'next' ? swiper.slideNext() : swiper.slidePrev();
      }}
    />
  );
};

export default HideSwiperButton;
