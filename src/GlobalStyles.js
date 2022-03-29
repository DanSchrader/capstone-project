import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
    padding: 0;
    margin: 0;
    background-color: #121212;
    color: #dcdcdc;
  }

  input, label, button, textarea {
    font-size: 1em;
  }
`;
