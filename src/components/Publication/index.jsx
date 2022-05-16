import { memo } from 'react';
import {
  Container,
  ImageContainer,
  Image,
  Information,
  Title,
  Authors,
  Limb,
  Links,
  LinkText,
  Button,
} from './styles';

const Publication = ({ data }) => {
  const { image, title, authors, limb } = data;

  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Information>
        <Title>{title}</Title>
        <Authors>{authors}</Authors>
        <Limb>{limb}</Limb>
      </Information>
      <Links>
        <LinkText>Читать полностью</LinkText>
        <Button />
      </Links>
    </Container>
  );
};

export default memo(Publication);
