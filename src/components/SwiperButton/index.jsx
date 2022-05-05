import { useSwiper } from 'swiper/react';
import Button from './styles';

const SwiperButton = ({ direction }) => {
  const swiper = useSwiper();

  return (
    <Button
      direction={direction}
      onClick={() => {
        return direction === 'next' ? swiper.slideNext() : swiper.slidePrev();
      }}
    />
  );
};

export default SwiperButton;
