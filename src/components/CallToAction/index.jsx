/* eslint-disable react/jsx-props-no-spreading */

import { useForm } from 'react-hook-form';
import Input from '../Input';
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
    // eslint-disable-next-line no-alert
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
            <Input
              label="name"
              type="text"
              placeholder="Имя"
              register={register}
              isError={errors}
              minLength={2}
              required
            />
            <Input
              label="surname"
              type="text"
              placeholder="Фамилия"
              register={register}
              isError={errors}
              minLength={2}
            />
            <Input
              label="phone"
              type="tel"
              placeholder="Телефон"
              register={register}
              isError={errors}
              minLength={5}
            />
            <Input
              label="email"
              type="email"
              placeholder="E-mail"
              register={register}
              isError={errors}
              required
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
