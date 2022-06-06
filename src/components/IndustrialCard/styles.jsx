import styled from 'styled-components';

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 0;
  width: 100%;
  color: var(--color-blue);
  border: 1px solid var(--color-blue);
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: transparent;
  font: var(--main-14-19);
  z-index: 2;
  @media screen and (max-width: 1230px) {
    padding: 8px 0;
    border-radius: 5px;
    font: var(--header-10);
    letter-spacing: var(--letter-spacing-06);
  }
`;

export const IndustrialCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: 255px;
  padding: 30px 20px 20px 20px;
  box-sizing: border-box;
  background: var(--color-white);
  box-shadow: 0px 4px 20px rgb(1 54 157 / 15%);
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background: linear-gradient(
      180deg,
      var(--color-emerald) 0%,
      rgba(224, 240, 255, 0) 100%,
      rgba(0, 159, 172, 0) 100%
    );
    transform: translateY(-20px);
    background-color: var(--color-emerald);
    color: var(--color-white);
  }
  &:hover ${CardButton} {
    border-color: var(--color-white);
    color: var(--color-white);
    cursor: pointer;
  }
  &:active {
    transform: translateY(-10pt);
  }
  &:active ${CardButton} {
    border-color: var(--color-emerald);
    background: var(--color-white);
    color: var(--color-emerald);
  }
  &::before {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    content: '';
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background: ${(props) => {
      return `url(${props.background})`;
    }};
  }
  @media screen and (max-width: 1230px) {
    max-width: 150px;
    padding: 12px;
    box-shadow: 0px 2.35349px 11.7674px rgba(1, 54, 157, 0.15);
    border-radius: 5.88372px;
    gap: 20px;
    &:hover {
      transform: translateY(-10pt);
    }
    &:active {
      transform: translateY(-10pt);
    }
    &:hover ${CardButton} {
      border-color: transparent;
      background: var(--color-white);
      color: var(--color-emerald);
    }
    &:active ${CardButton} {
      border-color: transparent;
      background: var(--color-white);
      color: var(--color-emerald);
    }
  }
  @media screen and (max-width: 710px) {
    max-width: 140px;
    padding: 10px;
    box-shadow: none;
    border-radius: 5.45566px;
    gap: 16px;
    &:hover {
      transform: translateY(0);
    }
    &:active {
      transform: translateY(0);
    }
  }
`;

export const CardTitle = styled.h3`
  text-align: center;
  margin: 0 auto;
  padding: 0;
  font: var(--header-18);
  z-index: 2;
  min-height: 60px;
  @media screen and (max-width: 1230px) {
    font: var(--header-12);
    min-height: 30px;
  }
  @media screen and (max-width: 710px) {
    font: var(--header-10);
    min-height: 28px;
  }
`;

export const CardIcon = styled.img`
  width: 34px;
  height: 34px;
  margin: 0 auto;
  padding: 18px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 20px rgba(1, 54, 157, 0.15);
  border-radius: 36px;
  z-index: 2;
  @media screen and (max-width: 1230px) {
    width: 20px;
    height: 20px;
    padding: 11px;
  }
  @media screen and (max-width: 710px) {
    width: 20px;
    height: 20px;
    padding: 11px;
    &:hover ${CardButton} {
      border-color: transparent;
      background: var(--color-white);
      color: var(--color-emerald);
    }
    &:active ${CardButton} {
      border-color: transparent;
      background: var(--color-white);
      color: var(--color-emerald);
    }
  }
`;

export const CardText = styled.p`
  font: var(--main-14-20);
  letter-spacing: var(--letter-spacing-1);
  text-align: center;
  margin: 0 auto;
  padding: 0;
  z-index: 2;
  @media screen and (max-width: 1230px) {
    font: var(--main-10);
    letter-spacing: var(--letter-spacing-1);
  }
`;
