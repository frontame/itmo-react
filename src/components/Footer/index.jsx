import {
  AboutContainer,
  Container,
  Grid,
  Icons,
  List1,
  List2,
  List3,
  Logo,
  TextContainer,
  TextDarkContainer,
} from './style';
import Vk from '../../images/social_icons/vk';

const Footer = () => {
  return (
    <Container>
      <Grid>
        <Logo />
        <TextContainer>Информация © 2020 Университет ИТМО</TextContainer>
        <AboutContainer>
          Национальный центр когнитивных разработок – центр национальной
          технологической инициативы (НТИ), получивший государственную поддержку
          по направлению «Технологии машинного обучения и когнитивные
          технологии». Инфраструктурная основа взаимодействия научных,
          образовательных и промышленных организаций
        </AboutContainer>
        <List1>
          <h3>О центре</h3>
          <li>О нас</li>
          <li>Главная</li>
          <li>Команда</li>
          <li>Лаборатория</li>
          <li>Контакты</li>
        </List1>
        <List2>
          <h3>Развитие</h3>
          <li>Образование</li>
          <li>Аспирантура</li>
          <li>Магистратура</li>
          <li>Публикации</li>
          <li>Проекты</li>
        </List2>
        <List3>
          <h4>г.Санкт-Петербург</h4>
          <li>
            199034, Санкт-Петербург, Биржевая линия, д. 4, лит. М, ауд. 302С
          </li>
          <li>
            +7 (812) 337-64-90
            <br />
            +7 (812) 337-64-94
          </li>
          <li>anna.lutsenko@itmo.ru</li>
          <Icons>
            <Vk />
            <Vk />
            <Vk />
            <Vk />
            <Vk />
          </Icons>
        </List3>
        <TextDarkContainer>
          Сделано студентами Яндекс. Практикума
        </TextDarkContainer>
      </Grid>
    </Container>
  );
};

export default Footer;
