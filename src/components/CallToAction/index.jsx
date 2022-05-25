/* eslint-disable react/jsx-props-no-spreading */

import { useForm } from 'react-hook-form';
import { Section, Container, Title, TextContainer } from './style';

const CallToAction = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <Section>
      <Container>
        <Title>Всегда на связи</Title>
        <TextContainer>
          По всем интересующим вас вопросам вы всегда можете обратиться по
          указанным телефонам, написать на почту или оставтиь свое сообщение
          через форму обратной связи.
        </TextContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <input
              type="text"
              placeholder="Имя*"
              {...register('name', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
              })}
              style={
                errors?.name && { background: '#FFAAAA', color: '#000000' }
              }
              title={errors?.name?.message || 'Ошибка заполнения поля'}
            />
            <input
              type="text"
              placeholder="Фамилия"
              {...register('surname', {
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
              })}
              style={
                errors?.surname && { background: '#FFAAAA', color: '#000000' }
              }
              title={errors?.surname?.message || 'Ошибка заполнения поля'}
            />
            <input type="tel" placeholder="Телефон" {...register('phone')} />
            <input
              type="email"
              placeholder="E-mail*"
              {...register('email', {
                required: 'Поле обязательно для заполнения',
              })}
              style={
                errors?.email && { background: '#FFAAAA', color: '#000000' }
              }
              title={errors?.email?.message || 'Ошибка заполнения поля'}
            />
          </fieldset>
          <textarea
            placeholder="Сообщение*"
            {...register('message', {
              required: 'Поле обязательно для заполнения',
            })}
            style={
              errors?.message && { background: '#FFAAAA', color: '#000000' }
            }
            title={errors?.message?.message || 'Ошибка заполнения поля'}
          />
          <button type="submit">Отправить</button>
        </form>
      </Container>
    </Section>
  );
};

export default CallToAction;
