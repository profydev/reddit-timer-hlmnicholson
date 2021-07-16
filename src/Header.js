import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Header() {
  return (
    <header>
      <Logo />
      <a href="#how-it-works">How it works</a>
      <a href="#about">About</a>
      <Link to="/search?q=javascript">Search</Link>
    </header>

  );
}

export default Header;
