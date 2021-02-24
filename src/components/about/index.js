import React from 'react';

import marcos from '../../assets/img/marcos.jpg';
import svgCode from '../../img/code.svg';
import svgDesktop from '../../img/desktop.svg';
import svgYoutube from '../../img/youtube.svg';

import { Container, Section } from './styles';

const About = () => {

  return (
    <>
      <Container>
        <h2>ABOUT ME</h2>
        <img src={marcos} alt="Profile"/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga 
          sapiente ipsum vitae nulla aut inventore repellendus qui. Porro.
          Fuga sapiente ipsum vitae nulla aut inventore repellendus qui. Porro.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur 
          id architecto aperiam modi, quo iure repudiandae in rerum, ea 
          consequatur magnam facere pariatur!Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. Fuga sapiente ipsum vitae nulla aut 
          inventore repellendus qui. Porro.
        </p>

        <Section>
          <h3>SELF PROCLAMATIONS:</h3>
          <ul>
            <li>
              <img src={svgCode} alt="icon"/>
              <span>Frontend Dev</span>
            </li>
            <li>
              <img src={svgDesktop} alt="icon"/>
              <span>UX Enthusiast</span>
            </li>
            <li>
              <img src={svgYoutube} alt="icon"/>
              <span>Youtuber Apprentice</span>
            </li>
          </ul>
        </Section>
      </Container>
    </>
  );
}

export default About;