/* eslint-disable react/jsx-props-no-spreading */
import InputElement from './style';

const Input = (props) => {
  const { label, type, placeholder, register, isError, minLength, required } =
    props;

  const minLengthReq = {
    value: minLength,
    message: `Минимум ${minLength} символа`,
  };

  return (
    <InputElement
      type={type}
      placeholder={`${placeholder}${required ? '*' : ''}`}
      isError={isError?.[label]}
      {...register(label, {
        required: required ? 'Поле обязательно для заполнения' : false,
        minLength: minLength ? minLengthReq : '',
        pattern:
          type === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i : '',
      })}
    />
  );
};

export default Input;
