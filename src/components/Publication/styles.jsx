import styled from 'styled-components';

import rightArrow from '../../images/publication-arrow-right.svg';
import shareIcon from '../../images/publication-share-button.svg';

export const Container = styled.div`
  width: 348px;
  height: 548px;
  margin-bottom: 70px;
  box-shadow: 0px 4px 20px rgba(1, 54, 157, 0.15);
  border-radius: 10px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  padding: 20px 19px 0;
  width: 310px;
  height: 223px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: all 0.3s linear;
`;

export const Information = styled.div`
  padding: 20px 20px 30px;
`;

export const Title = styled.h4`
  font: 600 18px/30px OpenSans;
  color: #000d26;
  margin: 0 0 4px;
`;

export const Authors = styled.p`
  font: italic 400 14px/19px OpenSans;
  color: #009fac;
  margin: 0 0 20px;
`;

export const Limb = styled.p`
  font: 400 14px/19px OpenSans;
  color: #000d26;
  margin: 0;
`;

export const Links = styled.div`
  background-color: #009fac;
  width: 100%;
  height: 70px;
  border-radius: 0px 0px 10px 10px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  /* bottom: -70px; */
  bottom: 0;
  transition: all 0.3s ease-in-out;
`;

export const LinkText = styled.a`
  font: 600 18px/30px OpenSans;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  padding-right: 8px;
  box-sizing: border-box;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    right: -24px;
    background-image: url(${rightArrow});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;
    height: 24px;
    transition: all 0.3s linear;
  }

  &:hover::after {
    right: -32px;
  }
`;

export const Button = styled.button`
  background-image: url(${shareIcon});
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center right;
  width: 26px;
  height: 26px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
