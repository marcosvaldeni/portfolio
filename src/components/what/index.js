import React from 'react';

import svgCode from '../../img/code.svg';
import svgDesktop from '../../img/desktop.svg';
import svgYoutube from '../../img/youtube.svg';

import { Main, Container, Background, Resume, Div } from './styles';

const What = () => {

  return (
    <Div>
    <Background id="whatido">
      <h2>WHAT I DO</h2>
      <Main>
        <Container>
          <img src={svgDesktop} alt="Icon"/>
          <h4>UX Design</h4>
          <p>
            ‘User experience refers to the singular and accumulated experiences 
            that occur for users as a consequence of them interacting with an 
            object in a given context’.
          </p>
        </Container>
        <Container>
          <img src={svgCode} alt="Icon"/>
          <h4>FontEnd Developer</h4>
          <p>
            I have a strong foundation in Computer Science and some experience 
            with Web development. Focus on developing and code websites in line 
            with best practices and system documentation. I am constantly 
            studying to improve my skills and grow as a developer.
          </p>
        </Container>
        <Container>
          <img src={svgYoutube} alt="Icon"/>
          <h4>YouTuber</h4>
          <em>"Learning by teaching" </em>
          <p>
            A channel to help the community with web development content, it was 
            designed to reach the Portuguese speaker's audience, considering the 
            majority of online content available is always in English.
          </p>
        </Container>
      </Main>
    </Background>
      <Resume>
        <div>
          <h2>CHECK MY RESUME</h2>
          <button>DOWNLOAD</button>
        </div>
      </Resume>
      </Div>
  );
}

export default What;
