import React from 'react';

import svgCode from '../../img/code.svg';
import svgDesktop from '../../img/desktop.svg';
import svgYoutube from '../../img/youtube.svg';

import { Container, Section } from './styles';

const About = () => {

  return (
    <>
      <Container>
        <h2>ABOUT ME</h2>
        <img 
          src="https://avatars.githubusercontent.com/u/15179803?s=460&u=6c2d2619c59abf5748c38642ab637cc33a36fcb8&v=4" 
          alt="Profile Photo"
        />
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