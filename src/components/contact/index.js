import React from 'react';
import { FaRegComments } from "react-icons/fa";

import { Background, Footer, Icon } from './styles';

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

      <div>
        <FaRegComments size={50} />
      </div>
    </Background>
  <Footer>
    a
    <div>
      <Icon>
        <FaRegComments size={30} color={'#cacaca'} />
      </Icon>
    </div>
    <p>
      Live long and prosper 🖖
    </p>
    <h3>Marcos Vadelni Lucas © 2021</h3>
  </Footer>
    </>
  );
}

export default contact;
