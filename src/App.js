import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/home';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
