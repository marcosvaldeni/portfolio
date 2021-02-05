import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Contact from './components/contact/';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Router>
        <Contact />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
