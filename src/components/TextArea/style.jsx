import styled from 'styled-components';

const TextAreaElement = styled.textarea`
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
  background-color: ${(props) => {
    return !props.isError ? props.theme.thirdColor : '#ffaaaa';
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
`;

export default TextAreaElement;
