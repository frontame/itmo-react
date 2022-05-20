/* eslint-disable react/jsx-props-no-spreading */

import { useForm } from 'react-hook-form';
import { Section, Container, Title, TextContainer } from './style';

const CallToAction = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
            <input placeholder="Имя" {...register('name')} />
            <input placeholder="Фамилия" {...register('surname')} />
            <input placeholder="Телефон" {...register('phone')} />
            <input placeholder="E-mail" {...register('email')} />
          </fieldset>
          <textarea placeholder="Сообщение" {...register('message')} />
          <input type="submit" />
        </form>
      </Container>
    </Section>
  );
};

export default CallToAction;
