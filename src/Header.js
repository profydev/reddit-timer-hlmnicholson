import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import LogoLink from './Logo';
// import Search from './Search';
import logo from './logo.svg';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Nav = styled.nav`
  margin-top: 35px;
  margin-right: 79px;
  border: 2px solid red;
`;

const Logo = styled(Link)`
  margin-top: 32px;
  margin-left: 80px;
  display: block;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  size: 16px;
  margin-left: 26px;
`;

function Header() {
  return (
    <Container>
      <Logo to="/#"><img src={logo} alt="Logo" /></Logo>
      <Nav>
        <NavLink to="/search?q=javascript">Search</NavLink>
        <NavLink to="/#how-it-works">How it works</NavLink>
        <NavLink to="/#about">About</NavLink>
      </Nav>
    </Container>
  );
}

export default Header;
