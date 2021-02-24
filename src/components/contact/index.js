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
      <Background>
        <h2>GET IN TOUCH!</h2>

        <p>
          Phasellus ut dui eu erat suscipit sollicitudin. Suspendisse sed ipsum 
          sem. Nunc in imperdiet lorem. Nunc dolor lectus, luctus eget nibh in, 
          accumsan dignissim dolor.
        </p>

      </Background>
      <Footer>

        <Icons>
          <li>
            <FaEnvelope size={30} color={'#cacaca'} />
          </li>
          <li>
            <FaGithub size={30} color={'#cacaca'} />
          </li>
          <li>
            <FaLinkedin size={30} color={'#cacaca'} />
          </li>
          <li>
            <FaYoutube size={30} color={'#cacaca'} />
          </li>
        </Icons>

        
        <p>
          Live long and prosper 🖖
        </p>
        
        <h3>Marcos Vadelni Lucas © 2021</h3>
      </Footer>
    </>
  );
}

export default contact;
