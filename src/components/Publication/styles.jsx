import styled from 'styled-components';

import rightArrow from '../../images/publication-arrow-right.svg';
import shareIcon from '../../images/publication-share-button.svg';

export const Container = styled.div`
  width: 348px;
  height: 548px;
  margin-bottom: 70px;
  box-shadow: 0px 4px 20px rgba(1, 54, 157, 0.15);
  border-radius: 10px;
  background-color: ${(props) => {
    return props.theme.thirdColor;
  }};
  position: relative;
  overflow: hidden;

  @media (max-width: 1280px) {
    width: 330px;
    height: 515px;
    margin-bottom: 42px;
  }

  @media (max-width: 480px) {
    width: 288px;
    height: 462px;
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled.div`
  padding: 20px 20px 0;
  width: 310px;
  height: ${(props) => {
    return props.height;
  }};
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  @media (max-width: 1280px) {
    width: 291px;
    height: 158px;
  }

  @media (max-width: 480px) {
    width: 256px;
    height: 160px;
    padding: 16px 16px 0;
  }
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
  min-height: 305px;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    padding-bottom: 10px;
    height: 277px;
    min-height: unset;
  }

  @media (max-width: 480px) {
    height: 242px;
    padding: 12px 16px 16px;
  }
`;

export const Title = styled.h4`
  font: var(--header-18);
  color: ${(props) => {
    return props.theme.primaryColorDark;
  }};
  margin: 0 0 4px;

  @media (max-width: 480px) {
    font: var(--header-14);
  }
`;

export const Authors = styled.p`
  font: var(--accent-14);
  color: ${(props) => {
    return props.theme.secondaryColor;
  }};
  margin: 0 0 20px;

  @media (max-width: 1280px) {
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font: var(--accent-12);
    margin-bottom: 10px;
  }
`;

export const Limb = styled.p`
  font: var(--main-14);
  color: ${(props) => {
    return props.theme.primaryColorDark;
  }};
  margin: 0;

  @media (max-width: 480px) {
    font: var(--main-12);
  }
`;

export const Links = styled.div`
  background-color: ${(props) => {
    return props.theme.bgColorSecondary;
  }};
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
  bottom: ${(props) => {
    return props.visible ? '0' : '-70px';
  }};
  transition: all 0.3s ease-in-out;

  @media (max-width: 1280px) {
    height: 60px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: static;
    left: unset;
    bottom: unset;
  }

  @media (max-width: 480px) {
    height: 44px;
    padding: 12px 16px 13px 16px;
  }
`;

export const LinkText = styled.a`
  font: var(--header-18);
  color: ${(props) => {
    return props.theme.thirdColor;
  }};
  text-decoration: none;
  position: relative;
  padding-right: 8px;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 480px) {
    font: var(--header-14);
  }

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

    @media (max-width: 1280px) {
      right: -32px;
    }

    @media (max-width: 480px) {
      top: -2px;
    }
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
