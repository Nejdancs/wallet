import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
 

  html {
    scroll-behavior: smooth;
  }
  body { 
    font-family: 'Circe', sans-serif;
    background-color: #fff;
    color: #010101;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }


  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
  text-decoration: none;
  color: inherit;
}

address {
  font-style: normal;
}


::selection {
    background-color: #5cebdf;
}

`;
