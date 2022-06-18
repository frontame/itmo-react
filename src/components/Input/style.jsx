import styled from 'styled-components';

const InputElement = styled.input`
  width: 352px;
  height: 60px;
  padding: 19px 23px 19px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  outline: none;
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
    font-size: 14px;
    width: 210px;
    height: 44px;
    padding: 12px;
  }

  @media (max-width: 767px) {
    width: 288px;
    border-radius: 5px;
    font: var(--main-12);
    padding: 10px;
  }
`;

export default InputElement;
