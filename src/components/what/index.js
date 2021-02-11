import React from 'react';

import svgCode from '../../img/code.svg';
import svgDesktop from '../../img/desktop.svg';
import svgYoutube from '../../img/youtube.svg';

import { Main, Container, Background, Resume } from './styles';

const what = () => {

  return (
    <>
    <Background>
      <h2>WHAT I DO</h2>
      <Main>
        <Container>
          <img src={svgDesktop} alt="Icon"/>
          <h4>UX Design</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, dicta 
            dolorem. Nemo. Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Corporis tempore ad molestiae cumque fuga, optio quam odit 
            dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea et corrupti harum ipsam cumque cupiditate!
          </p>
        </Container>
        <Container>
          <img src={svgCode} alt="Icon"/>
          <h4>FontEnd Developer</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, dicta 
            dolorem. Nemo. Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Corporis tempore ad molestiae cumque fuga, optio quam odit 
            dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea et corrupti harum ipsam cumque cupiditate!
          </p>
        </Container>
        <Container>
          <img src={svgYoutube} alt="Icon"/>
          <h4>YouTuber</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, dicta 
            dolorem. Nemo. Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Corporis tempore ad molestiae cumque fuga, optio quam odit 
            dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea et corrupti harum ipsam cumque cupiditate!
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
