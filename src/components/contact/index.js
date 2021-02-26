import React from 'react';
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import { Background, Footer, Icons } from './styles';

const contact = () => {

  return (
    <>
      <Background id="contact">
        <h2>GET IN TOUCH!</h2>

        <p>
          I am always open to hear about new ideas for projects. So, if you 
          have an idea or come across a project that you want to develop feel 
          free to reach me out!
        </p>

      </Background>
      <Footer>

        <Icons>
          <a href="mailto:marcosvaldeni@gmail.com">
            <li>
              <FaEnvelope size={30} color={'#cacaca'} />
            </li>
          </a>
          <a href="https://github.com/marcosvaldeni" target="_blank" rel="noreferrer" >
            <li>
              <FaGithub size={30} color={'#cacaca'} />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/marcos-v-lucas/" target="_blank" rel="noreferrer" >
            <li>
              <FaLinkedin size={30} color={'#cacaca'} />
            </li>
          </a>
          <a href="https://www.youtube.com/channel/UCAyZqmYI8vuJ9Tr2h7w7gug" target="_blank" rel="noreferrer" >
            <li>
              <FaYoutube size={30} color={'#cacaca'} />
            </li>
          </a>
        </Icons>

        <p>
          Live long and prosper 🖖
        </p>
        
        <h3><strong>Marcos Vadelni Lucas</strong> © 2021</h3>
      </Footer>
    </>
  );
}

export default contact;
