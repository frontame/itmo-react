/* eslint-disable react/jsx-props-no-spreading */
import TextAreaElement from './style';

const TextArea = (props) => {
  const { label, placeholder, register, isError, minLength, required } = props;

  const minLengthReq = {
    value: minLength,
    message: `Минимум ${minLength} символа`,
  };

  return (
    <TextAreaElement
      placeholder={`${placeholder}${required ? '*' : ''}`}
      isError={isError?.[label]}
      {...register(label, {
        required: required ? 'Поле обязательно для заполнения' : false,
        minLength: minLength ? minLengthReq : '',
      })}
    />
  );
};

export default TextArea;
