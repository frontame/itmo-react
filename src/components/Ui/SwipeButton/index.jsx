import ArrowButton from './styles';

const SwipeButton = (props) => {
  const { direction, onClick } = props;

  return <ArrowButton direction={direction} onClick={onClick} />;
};

export default SwipeButton;
