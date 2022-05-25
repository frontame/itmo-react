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

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 29px;
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
  }

  input {
    width: 352px;
    padding: 19px 23px 19px 20px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    outline: none;
    color: ${(props) => {
      return props.theme.secondaryColor;
    }};
    font: 400 18px/20px OpenSans;
    letter-spacing: var(--letter-spacing-1);

    &::placeholder {
      opacity: 1;
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
  }

  button {
    margin-top: 8px;
    width: 350px;
    height: 60px;
    /* border: 1px solid #ffffff; */
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
`;

export const TextContainer = styled.p`
  max-width: 919px;
  margin: 0 auto 60px;
  font: var(--main-18);
  letter-spacing: var(--letter-spacing-1);
  color: ${(props) => {
    return props.theme.thirdColor;
  }};
`;
