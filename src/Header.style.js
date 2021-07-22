import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  margin-top: 32px;
  margin-left: 80px;
  display: block;
`;

export const Nav = styled.nav`
  margin-top: 37px;
  margin-right: 80px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  size: ${(props) => props.theme.font.size.default};
  margin-left: 26px;
`;
