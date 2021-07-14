import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body{
      padding: 0;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
  }
  h1{
    font-family: 'Bitter', serif;
  }
`;

export default GlobalStyle;
