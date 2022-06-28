import styled from 'styled-components';
import closeSvg from '../../images/popup/popup-close-icon.svg';

export const PopupSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: rgba(0, 19, 55, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 888;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.3s linear;
  font-family: 'OpenSans';
`;

export const PopupContainer = styled.section`
  position: relative;
  display: grid;
  justify-content: start;
  align-items: start;
  grid-template-columns: 400px 1fr;
  grid-template-rows: minmax(33px, min-content) 1fr;
  gap: 20px;
  border-radius: 10px;
  margin: auto;
  padding: 20px;
  max-width: 1110px;
  background-color: #fff;
  box-sizing: border-box;
  @media screen and (max-width: 1230px) {
    grid-template-columns: 199px 1fr;
    grid-template-rows: minmax(30px, min-content) 1fr;
    max-width: 690px;
  }
  @media screen and (max-width: 710px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(24px, min-content) minmax(160px, min-content) 1fr;
    gap: 10px 0;
    max-width: 300px;
    padding: 16px;
  }
`;

export const PopupImage = styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 678px;
  object-fit: cover;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1230px) {
    max-width: 199px;
    max-height: 414px;
  }
  @media screen and (max-width: 710px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;
    max-width: 268px;
    max-height: 160px;
  }
`;

export const PopupTitle = styled.h3`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  align-self: center;
  margin: 0;
  padding: 0;
  font: var(--header-18);
  color: var(--color-dark-blue);
  @media screen and (max-width: 1230px) {
    margin: 0;
    padding: 0;
    font: var(--header-14);
  }
  @media screen and (max-width: 710px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: 0;
    padding: 0;
    font: var(--header-14);
  }
`;

export const PopupContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  letter-spacing: var(--letter-spacing-1);
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-decoration: none;
  @media screen and (max-width: 1230px) {
    max-width: 431px;
  }
  @media screen and (max-width: 710px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;
    max-width: 268px;
  }
`;

export const PopupText = styled.p`
  margin: 0;
  padding: 0 0 25px 0;
  &:last-of-type {
    padding: 0;
  }
  @media screen and (max-width: 1230px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media screen and (max-width: 710px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const PopupTextTypeWeb = styled.div`
  display: none;
  @media screen and (min-width: 1230px) {
    display: block;
  }
`;

export const PopupTextTypeTablet = styled.div`
  display: none;
  @media screen and (max-width: 1229px) and (min-width: 710px) {
    display: block;
  }
`;

export const PopupTextTypeMobile = styled.div`
  display: none;
  @media screen and (max-width: 709px) {
    display: block;
  }
`;

export const PopupList = styled.ul`
  padding: 0;
  margin: 0;
  padding-inline-start: 20px;
  @media screen and (max-width: 1230px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media screen and (max-width: 710px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const PopupCloseIcon = styled.button`
  position: absolute;
  top: 17px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-image: url(${closeSvg});
  background-size: contain;
  padding: 0;
  transition: all 0.3s ease;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  z-index: 999;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  @media screen and (max-width: 1230px) {
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
  }
  @media screen and (max-width: 710px) {
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
  }
`;
