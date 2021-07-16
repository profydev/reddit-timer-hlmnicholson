import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  #logo {
    border: 2px solid green;
  }
`;

function Header() {
  return (
    <header>
      <Wrapper>
        <Logo id="logo" />
        <nav>
          <Search />
          <a href="/#how-it-works">How it works</a>
          <a href="/#about">About</a>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
