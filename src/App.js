import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Experience from './components/experience';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Router>
        <Experience />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
