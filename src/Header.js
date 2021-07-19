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
  border: 2px solid green;
`;

const Logo = styled(Link)`
padding-left: 200px;

`;

const NavLink = styled(Link)`
 margin: 10px;
 text-decoration: none;

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
