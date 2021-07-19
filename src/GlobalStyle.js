import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /** Montserrat Regular **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/font/Montserrat-Regular.woff2") format("woff2"),
    url("/font/Montserrat-Regular.woff") format("woff");
  }

  /** Montserrat Mediumn **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("/font/Montserrat-Mediumn.woff2") format("woff2"),
    url("/font/Montserrat-Mediumn.woff") format("woff");
  }

  /** Montserrat SemiBold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url("/font/Montserrat-SemiBold.woff2") format("woff2"),
    url("/font/Montserrat-SemiBold.woff") format("woff");
  }

  /** Montserrat Bold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src: url("/font/Montserrat-Bold.woff2") format("woff2"),
    url("/font/Montserrat-Bold.woff") format("woff");
  }

  /** Bitter Regular **/
  @font-face {
    font-family: "Bitter";
    src: url("/font/Bitter-Regular.woff2") format("woff2"),
    url("/font/Bitter-Regular.woff") format("woff");
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.color.text}
  }

`;

export default GlobalStyle;
