import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
  }

  ul, ol {
    padding: 1rem 0;
  }

  li {
    list-style: none;
  }

  h1 {
    font-family: roboto, arial;
  }
`;
