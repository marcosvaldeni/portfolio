import React from 'react';

import Landing from '../components/landing';
import About from '../components/about';
import What from '../components/what';
import Experience from '../components/experience';
import Project from '../components/project';
import Contact from '../components/contact';

const home = () => {

  return (
    <>
      <Landing />
      <About />
      <What />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export default home;
