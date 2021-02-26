import React, { useRef, useEffect, useCallback } from 'react';

import { projects } from '../../services/db.json';
import { FaTimes, FaGithub, FaGlobe } from "react-icons/fa";
import { Background, Project, Container, Button, Close } from './styles';

const Display = ({ showModal, setShowModal, projectModal }) => {
  const bg = require(`../../assets/projects/${projects[projectModal].img}`).default;
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
        <img src={bg} alt={projects[projectModal].name}/>

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
            <Button href={projects[projectModal].online} target="_blank" rel="noreferrer">
              <FaGlobe size={30}/>
              Check Project Online
            </Button>
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
