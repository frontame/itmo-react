import { useCallback, useState } from 'react';
import { Logo, Container, Nav, NavBtn, NavList, NavLink } from './style';

const linkList = [
  'О нас',
  'Лаборатория',
  'Проекты',
  'Образование',
  'Публикации',
  'Команда',
  'Связаться',
];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <Container>
      <Nav toggle={toggle}>
        <Logo toggle={toggle} />
        <NavBtn toggle={toggle} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </NavBtn>
        <NavList toggle={toggle}>
          {linkList.map((item) => {
            return (
              <li key={item}>
                <NavLink href="#">{item}</NavLink>
              </li>
            );
          })}
        </NavList>
      </Nav>
    </Container>
  );
};

export default Header;
