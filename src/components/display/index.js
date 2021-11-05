import React, { useRef, useEffect, useCallback } from 'react';

import { projects } from '../../services/db.json';
import { FaTimes, FaGithub, FaGlobe, FaFigma } from "react-icons/fa";
import { Background, Project, Container, Button, Close } from './styles';

const Display = ({ showModal, setShowModal, projectModal }) => {
  const modalRef = useRef();
  const technologies = projects[projectModal].technologies.split(',');

  const openCloseModal = () => {
    setShowModal(prev => !prev);
  }

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <Background ref={modalRef}>
      <Project>
        <Close onClick={openCloseModal}>
          <FaTimes size={20} />
        </Close>
        <h2>{projects[projectModal].name}</h2>
        <img src={"https://raw.githubusercontent.com/marcosvaldeni/portfolio/master/src/assets/projects/" + projects[projectModal].img} alt={projects[projectModal].name}/>

        <Container>
          <div>
            {technologies.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div>
              <Button href={projects[projectModal].source} target="_blank" rel="noreferrer">
                <FaGithub size={30}/>
                Project Source Code
              </Button>
              {
                projects[projectModal].online &&
                <Button href={projects[projectModal].online} target="_blank" rel="noreferrer">
                  <FaGlobe size={30}/>
                  Check Project Online
                </Button>

              }
              { 
                projects[projectModal].figma &&
                <Button href={projects[projectModal].figma} target="_blank" rel="noreferrer">
                  <FaFigma size={30}/>
                          Check UI Figma Project
                </Button>
              }
          </div>
        </Container>

        <p>
          {projects[projectModal].description}
        </p>
      </Project>
    </Background>
  );
}

export default Display;
