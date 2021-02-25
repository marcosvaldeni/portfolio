import React from 'react';

import svgCode from '../../img/code.svg';
import svgDesktop from '../../img/desktop.svg';
import svgYoutube from '../../img/youtube.svg';

import { Main, Container, Background, Resume } from './styles';

const what = () => {

  return (
    <>
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
            I have a strong foundation in Computer Science, with some 
            experience in Web development using JavaScript, CSS, and HTML. 
            Proactively design, develop and code websites according with 
            development best practices and system documentation. I am 
            constantly study and improving my skills to be able to grow as a 
            developer.
          </p>
        </Container>
        <Container>
          <img src={svgYoutube} alt="Icon"/>
          <h4>YouTuber</h4>
          <p>
            This channel was created based in a theory that by teaching what I 
            have learned I can fix the content and internalize it better, and in 
            complement contribute to the community.
          </p>
          <p>
            The videos are recorded in Portuguese as is my mother language, 
            but the mean reason to take this approach is considering that the 
            majority of the videos available in the platform related to 
            programming are in English, however the Brazilian audience has a 
            demand for more content in their native language because of 
            limitation.
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
      </>
  );
}

export default what;
