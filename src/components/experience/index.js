import React from 'react';

import pngDerhous from '../../assets/derhous.png';
import pngCCT from '../../assets/cct.png';
import svgJs from '../../assets/javascript.svg';
import svgHhml from '../../assets/html.png';
import svgCss from '../../assets/css.svg';
import svgTypescript from '../../assets/typescript.svg';
import svgReact from '../../assets/react.svg';
import svgSass from '../../assets/sass.svg';
import svgNode from '../../assets/node.svg';
import svgPostgres from '../../assets/postgresql.svg';
import svgDocker from '../../assets/docker.svg';
import svgMysql from '../../assets/mysql.svg';
import svgPhp from '../../assets/php.svg';
import svgLinux from '../../assets/linux.svg';
import svgFirebase from '../../assets/firebase.svg';
import svgGithub from '../../assets/github.svg';
import svgJava from '../../assets/java.svg';
import svgBootstrap from '../../assets/bootstrap.svg';
import svgFigma from '../../assets/figma.svg';


import { Container, Content, Aside, Main, Icons } from './styles';

const Experience = () => {

  return (
    <>
      <Container id="experience">
        
        <div>
          <h2>EXPERIENCE</h2>

          <p>
            I am a graduated in Information Technology with 2 years’ experience 
            in Web development using HTML, CSS, and JavaScript.  I'm always 
            eager to learn more in this fast-paced industry. Currently looking 
            for a Junior Frontend position.
          </p>
        </div>

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
                <span>Derhaus Training</span>
              </li>
            </ul>
          </Aside>
          <Main>
            <h3>I'VE WORKED WITH:</h3>
            <Icons>
              <div>
                <img src={svgJs} alt="JavaScript"/>
              </div>
              <div>
                <img src={svgHhml} alt="HTML"/>
              </div>
              <div>
                <img src={svgCss} alt="CSS"/>
              </div>
              <div>
                <img src={svgSass} alt="Sass"/>
              </div>
              <div>
                <img src={svgTypescript} alt="TypeScript"/>
              </div>
              <div>
                <img src={svgReact} alt="React"/>
              </div>
              <div>
                <img src={svgFigma} alt="Figma"/>
              </div>
              <div>
                <img src={svgGithub} alt="GitHub"/>
              </div>
              <div>
                <img src={svgNode} alt="NodeJS"/>
              </div>
              <div>
                <img src={svgPostgres} alt="PostgresSLQ"/>
              </div>
              <div>
                <img src={svgMysql} alt="MySQL"/>
              </div>
              <div>
                <img src={svgDocker} alt="Docker"/>
              </div>
              <div>
                <img src={svgFirebase} alt="Firebase"/>
              </div>
              <div>
                <img src={svgPhp} alt="PHP"/>
              </div>
              <div>
                <img src={svgLinux} alt="Linux"/>
              </div>
              <div>
                <img src={svgJava} alt="Java"/>
              </div>
              <div>
                <img src={svgBootstrap} alt="Bootstrap 4"/>
              </div>
            </Icons>
          </Main>
        </Content>
      
      </Container> 
    </>
  )
}

export default Experience;
