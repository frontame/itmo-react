import {
  Container,
  ImageContainer,
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
        <img src={image} alt={title} width="311px" />
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

export default Publication;
