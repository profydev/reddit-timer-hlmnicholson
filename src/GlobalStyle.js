import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body{
      padding: 0;
      margin: 0;
`;

export default GlobalStyle;
