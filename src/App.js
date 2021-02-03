import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Projects from './components/project';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Router>
        <Projects />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
