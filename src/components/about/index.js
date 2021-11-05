import React from 'react';

import marcos from '../../assets/img/marcos.jpg';
import svgCode from '../../img/code.svg';
import svgDesktop from '../../img/desktop.svg';
import svgYoutube from '../../img/youtube.svg';

import { Container, Section } from './styles';

const About = () => {

  return (
    <>
      <Container id="about">
        <h2>ABOUT ME</h2>
        <img src={marcos} alt="Profile"/>
        <p>
          Hi! My name is Marcos and I am a Junior Frontend Developer with a 
          passion for user experience. I graduated in Science in Information 
          Technology at CCT College Dublin. I am passionate for programming, 
          especially when it involves technology to make user's life easier.
        </p>
        <p>
          When I am not working or study, I enjoy mess around with video edition, 
          play games and listen podcasts.
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
              <span>YouTuber</span>
            </li>
          </ul>
        </Section>
      </Container>
    </>
  );
}

export default About;