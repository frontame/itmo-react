import styled from 'styled-components';
import rightArrow from '../../images/arrow-right.svg';

const Button = styled.button`
  position: absolute;
  top: 270px;
  left: ${(props) => {
    return props.direction === 'next' ? 'unset' : '0';
  }};
  right: ${(props) => {
    return props.direction === 'next' ? '0' : 'unset';
  }};
  width: 60px;
  height: 60px;
  background: #ffffff;
  background-image: url(${rightArrow});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 4px 20px rgba(1, 54, 157, 0.15);
  border-radius: 36px;
  border: 0;
  z-index: 10;
  transform: ${(props) => {
    return props.direction === 'next' ? 'unset' : 'rotate(180deg)';
  }};

  @media (max-width: 1280px) {
    display: none;
  }
`;

export default Button;
