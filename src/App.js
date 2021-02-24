import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/home';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Router>
        <Home />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
