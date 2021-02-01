import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Nav from './components/navbar/nav';
// import Landing from './components/landing';
import What from './components/what/what';

import About from './components/about';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Router>
        <What />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
