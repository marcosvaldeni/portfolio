import React, { useState } from 'react';

import Landing from '../components/landing';
import About from '../components/about';
import What from '../components/what';
import Experience from '../components/experience';
import Project from '../components/project';
import Contact from '../components/contact';
import Display from '../components/display';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Landing />
      <About />
      <What />
      <Display showModal={showModal} setShowModal={setShowModal} />
      <Project showModel={showModal} setShowModel={setShowModal} />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;
