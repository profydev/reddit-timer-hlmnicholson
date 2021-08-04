import React from 'react';
import * as S from './Header.style';
import logo from './logo.svg';

function Header() {
  return (
    <S.Wrapper>
      <S.Logo to="/#"><img src={logo} alt="Logo" /></S.Logo>
      <S.Nav>
        <S.NavLink to="/search/javascript">Search</S.NavLink>
        <S.NavLink to="/#how-it-works">How it works</S.NavLink>
        <S.NavLink to="/#about">About</S.NavLink>
      </S.Nav>
    </S.Wrapper>
  );
}

export default Header;
