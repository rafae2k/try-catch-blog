import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 /* ====  RESET ==== */
*,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;