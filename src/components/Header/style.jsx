import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--bg-color-dark-blue);
  margin: 0 auto;
`;

export const Nav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  padding-block: 16px 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Menu = styled.div`
  box-sizing: border-box;
  height: 24px;
  width: 24px;

  display: none;
  flex-direction: column;
  gap: 5px;

  span {
    margin: 0;
    padding: 0;

    background-color: white;

    height: 3px;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
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
    height: 42px;

    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid var(--color-emerald);
    }
  }
`;

export const Link = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;

  font: var(--main-14-19);

  color: var(--color-white);
`;

export const Logo = styled.div`
  min-width: 150px;
  height: 30px;
  background-color: black;
`;
