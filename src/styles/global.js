import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* width:100%;
    overflow-x:hidden;
    overflow-y:hidden; */
    font: 16px Roboto, sans-serif;
    line-height: 26px;
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