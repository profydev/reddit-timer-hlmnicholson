import React from 'react';
import Logo from './Logo';
import Search from './Search';

function Header() {
  return (
    <header>
      <Logo />
      <Search />
      <a href="/#how-it-works">How it works</a>
      <a href="/#about">About</a>
    </header>
  );
}

export default Header;
