import ArrowButton from './styles';

const SwipeButton = (props) => {
  const { design, direction, onClick } = props;

  return (
    <ArrowButton design={design} direction={direction} onClick={onClick} />
  );
};

export default SwipeButton;
