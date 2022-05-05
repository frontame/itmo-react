import { useState } from 'react';
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
  const [state, setState] = useState({
    linksVisibility: false,
    imageHeight: '223px',
  });

  const handleMouseEnter = () => {
    setState((prevState) => {
      return { ...prevState, linksVisibility: true, imageHeight: '158px' };
    });
  };

  const handleMouseLeave = () => {
    setState((prevState) => {
      return { ...prevState, linksVisibility: false, imageHeight: '223px' };
    });
  };

  return (
    <Container
      onMouseEnter={(e) => {
        return handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        return handleMouseLeave(e);
      }}
    >
      <ImageContainer height={state.imageHeight}>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Information>
        <Title>{title}</Title>
        <Authors>{authors}</Authors>
        <Limb>{limb}</Limb>
      </Information>
      <Links visible={state.linksVisibility}>
        <LinkText>Читать полностью</LinkText>
        <Button />
      </Links>
    </Container>
  );
};

export default Publication;
