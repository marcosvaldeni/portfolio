import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h2 {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 4px;
    margin-bottom: 20px
  }

  h3 {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 4px;
    margin-bottom: 40px;
  }
`;