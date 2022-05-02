import { Container, ImageContainer, Information, Title, Authors, Limb, Links, Link, Button } from "./styles";

const Publication = ({ data }) => {

  const { image, title, authors, limb } = data;

  return(
    <Container>
      <ImageContainer>
        <img src={image} alt={title} width={'311px'} />
      </ImageContainer>
      <Information>
        <Title>{title}</Title>
        <Authors>{authors}</Authors>
        <Limb>{limb}</Limb>
      </Information>
      <Links>
        <Link>Читать полностью</Link>
        <Button></Button>
      </Links>
    </Container>
  );
}

export default Publication;
