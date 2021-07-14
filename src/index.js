import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import App from './App';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
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

function Root() {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
