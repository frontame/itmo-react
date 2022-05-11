import { Nav, Container, Menu, List, Link, Logo } from './style';

const Header = () => {
  return (
    <Container>
      <Nav>
        <Menu>
          <span />
          <span />
          <span />
        </Menu>
        <Logo />
        <List>
          <li>
            <Link href="/">О нас</Link>
          </li>
          <li>
            <Link href="/">Лаборатория</Link>
          </li>
          <li>
            <Link href="/">Проекты</Link>
          </li>
          <li>
            <Link href="/">Образование</Link>
          </li>
          <li>
            <Link href="/">Публикации</Link>
          </li>
          <li>
            <Link href="/">Команда</Link>
          </li>
          <li>
            <Link href="/">Связаться</Link>
          </li>
        </List>
      </Nav>
    </Container>
  );
};

export default Header;
