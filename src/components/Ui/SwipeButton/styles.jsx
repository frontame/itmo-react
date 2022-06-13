import styled, { css } from 'styled-components';

import rightArrowBasic from '../../../images/arrow-right.svg';
import rightArrowSecondary from '../../../images/arrow-right-white.svg';

const ArrowButton = styled.button`
  ${(props) => {
    return props.design === 'light'
      ? css`
          background-image: url(${rightArrowBasic});
        `
      : css`
          background-image: url(${rightArrowSecondary});
        `;
  }}

  background-color: ${(props) => {
    return props.design === 'light'
      ? props.theme.thirdColor
      : props.theme.primaryColor;
  }};
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 4px 20px rgba(1, 54, 157, 0.15);
  border-radius: 36px;
  border: 0;

  position: absolute;
  top: 359px;
  left: ${(props) => {
    return props.direction === 'next' ? 'unset' : '-78px';
  }};
  right: ${(props) => {
    return props.direction === 'next' ? '-78px' : 'unset';
  }};
  width: 60px;
  height: 60px;
  z-index: 10;

  transform: ${(props) => {
    return props.direction === 'next' ? 'unset' : 'rotate(180deg)';
  }};
  transition: background-color 0.2s linear;

  @media (max-width: 1280px) {
    display: none;
  }

  &:hover,
  &:active {
    cursor: pointer;
    background-image: url(${rightArrowSecondary});
    background-color: ${(props) => {
      return props.theme.secondaryColor;
    }};
  }
`;

export default ArrowButton;
