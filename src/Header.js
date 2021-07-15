import React from 'react';
// import styled from 'styled-components';
// import { ReactComponent as Logo } from './logo.svg';

// // const Logo = styled.img`
// //   width: 500px;
// //   height: auto;
// //   padding: 20px;
// // `;

// // function LogoImg() {
// //   return <div><img src={image} alt="reddit timer logo and link to homepage" /></div>
// // }

// function Header() {
//   return (
//     <header>
//       {/* <LogoImage> */}
//       <Logo />
//       {/* </LogoImage> */}
//       Header PlaceHolder
//     </header>

//   );
// }
import logo from './logo.svg'; // Tell webpack this JS file uses this image

const Logo = () => <img src={logo} alt="Logo" />;

function Header() {
  return (
    <header>
      {/* <LogoImage> */}
      <Logo />
      {/* </LogoImage> */}
      Header PlaceHolder
    </header>

  );
}

export default Header;
