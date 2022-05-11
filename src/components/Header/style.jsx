import styled from 'styled-components';

export const Container = styled.header`
  background-color: grey;
`;

export const Nav = styled.nav`
  max-width: 1440px;
  padding: 20px 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: none;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  li {
    width: 100px;

    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Link = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
`;

export const Logo = styled.div`
  min-width: 150px;
  height: 30px;
  background-color: black;
`;
