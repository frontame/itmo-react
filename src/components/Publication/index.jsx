import styled from 'styled-components';

const Container = styled.div`
  width: 348px;
  height: 548px;
  box-shadow: 0px 4px 20px rgba(1, 54, 157, 0.15);
  border-radius: 10px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  padding: 20px 19px 0;
  width: 310px;
  height: 223px;
  border-radius: 10px;
  transition: all .3s ease-in-out;
`;

const Information = styled.div`
  padding: 20px 20px 30px;
`;

const Title = styled.h4`
  font: 600 18px/30px OpenSans;
  color: #000d26;
  margin: 0 0 4px;
`;

const Authors = styled.p`
  font: italic 400 14px/19px OpenSans;
  color: #009fac;
  margin: 0 0 4px;
`;

const Limb = styled.p`
  font: 400 14px/19px OpenSans;
  color: #000d26;
  margin: 0;
`;

const Links = styled.div`
  background-color: #009fac;
  width: 100%;
  height: 70px;
  border-radius: 0px 0px 10px 10px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: -70px;
  transition: all .3s ease-in-out;
`;

const Link = styled.a`
  font: 600 18px/30px OpenSans;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  padding-right: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-image: url(../../images/share-button.svg);
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center right;
  width: 26px;
  height: 26px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

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
