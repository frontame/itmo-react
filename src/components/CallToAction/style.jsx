import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${(props) => {
    return props.theme.bgColorSecondary;
  }};
`;

export const Container = styled.div`
  width: 1114px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 80px 0 35px;

  @media (max-width: 1200px) {
    width: 690px;
    padding-top: 60px;
  }

  @media (max-width: 767px) {
    width: 320px;
    padding: 40px 15px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 29px;

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 12px;
    }
  }

  fieldset {
    width: 100%;
    max-width: 733px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    border: none;
    row-gap: 20px;

    @media (max-width: 1200px) {
      max-width: 449px;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 12px;
    }
  }

  textarea {
    width: 352px;
    height: 140px;
    border-radius: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 20px 22px 20px 20px;
    resize: none;
    color: ${(props) => {
      return props.theme.secondaryColor;
    }};
    font: 400 18px/20px OpenSans;
    letter-spacing: var(--letter-spacing-1);

    &::placeholder {
      opacity: 1;
    }

    @media (max-width: 1200px) {
      width: 210px;
      height: 108px;
      font-size: 14px;
      padding: 12px;
    }

    @media (max-width: 767px) {
      width: 288px;
      border-radius: 5px;
      font: var(--main-12);
      padding: 10px;
    }
  }

  button {
    margin-top: 8px;
    width: 350px;
    height: 60px;
    border: ${(props) => {
      return `1px solid${props.theme.thirdColor}`;
    }};
    border-radius: 10px;
    font: var(--header-18);
    text-transform: uppercase;
    color: ${(props) => {
      return props.theme.thirdColor;
    }};
    background-color: transparent;
    transition: all 0.3s linear;

    &:hover {
      cursor: pointer;
      border: ${(props) => {
        return `1px solid${props.theme.secondaryColorLight}`;
      }};
      color: ${(props) => {
        return props.theme.secondaryColorLight;
      }};
    }

    @media (max-width: 1200px) {
      width: 210px;
      height: 44px;
    }

    @media (max-width: 767px) {
      width: 288px;
      font: var(--header-14);
    }
  }
`;

export const Title = styled.h2`
  font: var(--header-36);
  letter-spacing: var(--letter-spacing-1);
  color: ${(props) => {
    return props.theme.thirdColor;
  }};
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 37px;

  @media (max-width: 1200px) {
    font: var(--header-24);
  }

  @media (max-width: 767px) {
    font: var(--header-16);
    margin-bottom: 23px;
  }
`;

export const TextContainer = styled.p`
  max-width: 919px;
  margin: 0 auto 60px;
  font: var(--main-18);
  letter-spacing: var(--letter-spacing-1);
  color: ${(props) => {
    return props.theme.thirdColor;
  }};

  @media (max-width: 1200px) {
    font: var(--main-14-20);
    margin-bottom: 37px;
  }

  @media (max-width: 767px) {
    font: var(--main-12);
    margin-bottom: 23px;
  }
`;
