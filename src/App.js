import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Display from './components/display';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Router>
        <Display />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
