import React, { useRef, useEffect, useCallback } from 'react';

import { FaTimes, FaGithub, FaGlobe } from "react-icons/fa";

import bg from '../../img/bg-01.jpg';

import { Background, Project, Container, Button, Close } from './styles';

const Display = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

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
    <Background ref={modalRef} onClick={openCloseModal}>
      <Project>
        <Close onClick={openCloseModal}>
          <FaTimes size={20} />
        </Close>
        <h2>AVOCADO</h2>
        <img src={bg} alt="Avocado"/>

        <Container>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>PHP</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>PHP</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
          </div>

          <div>
            <Button>
              <FaGithub size={30}/>
              Project Source Code
            </Button>
            <Button>
              <FaGlobe size={30}/>
              Check Project Online
            </Button>
          </div>
        </Container>

        <p>
          Sed interdum lectus a arcu semper, eget posuere arcu vehicula. 
          Maecenas at accumsan urna. Proin aliquam egestas lobortis. Duis 
          varius porttitor mauris, sed blandit felis euismod fermentum. Ut 
          consectetur, lacus sit amet dapibus auctor, lorem sapien auctor 
          elit, a scelerisque ex ipsum non eros. Nullam aliquet finibus 
          lacus cursus interdum. Ut porta odio sed felis sodales dictum. 
          Duis sagittis nulla at justo placerat, sit amet dignissim tortor 
          maximus. Praesent quis viverra tortor, vel sagittis ipsum. Praesent 
          tempor facilisis nibh, at congue libero venenatis ac. Proin 
          tristique dui nunc, quis iaculis quam elementum ac.
        </p>
      </Project>
    </Background>
  );
}

export default Display;
