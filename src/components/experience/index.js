import React from 'react';

import pngDerhous from '../../assets/derhous.png';
import pngCCT from '../../assets/cct.png';
import svgJs from '../../assets/javascript.svg';
import svgHhml from '../../assets/html.svg';
import svgCss from '../../assets/css.svg';
import svgReact from '../../assets/react.svg';

import { Container, Content, Aside, Main, Icons } from './styles';

const experience = () => {

  return (
    <>
      <Container>
        <h2>EXPERIENCE</h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem 
          iusto laborum qui ratione rerum officia distinctio deleniti ab. Totam 
          maiores suscipit deleniti soluta sed aspernatur ipsa odio optio minus 
          iste?
        </p>

        <Content>
          <Aside>
            <h3>WHERE I HAVE WORKED:</h3>
            <ul>
              <li>
                <img src={pngCCT} alt="CCT College Dublin"/>
                <span>CCT College Dublin</span>
              </li>
              <li>
                <img src={pngDerhous} alt="Derhous Training"/>
                <span>Derhous Training</span>
              </li>
            </ul>
          </Aside>
          <Main>
            <h3>I'VE WORKED WITH:</h3>
            <Icons>
              <img src={svgJs} alt="JavaScript"/>
              <img src={svgHhml} alt="HTML"/>
              <img src={svgCss} alt="CSS"/>
              <img src={svgReact} alt="React"/>
              <img src={svgJs} alt="JavaScript"/>
              <img src={svgJs} alt="JavaScript"/>
              <img src={svgJs} alt="JavaScript"/>
              <img src={svgJs} alt="JavaScript"/>
              <img src={svgJs} alt="JavaScript"/>
              <img src={svgJs} alt="JavaScript"/>
              <img src={svgJs} alt="JavaScript"/>

            </Icons>
          </Main>
        </Content>
      </Container> 
    </>
  )
}

export default experience;
