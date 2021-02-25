import React, { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import logoImg from '../../img/logo.svg';

import { Header, Menu, Navbar, NavLinks } from './styles';

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="Logo" />
          <h1>
            MARCOS VALDENI LUCAS
          </h1>
        </div>
        <Navbar onClick={handleClick} click={click}>
          <Menu>
            <li>
              <NavLinks to="about"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-50}
              >
                ABOUT
              </NavLinks>
            </li>
            <li>
              <NavLinks to="whatido"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-50}
              >
                PASSION
              </NavLinks>
            </li>
            <li>
              <NavLinks to="project"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-50}
              >
                WORK
              </NavLinks>
            </li>
            <li>
              <NavLinks to="experience"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-50}
              >
                EXPERIENCE
              </NavLinks>
            </li>
            <li>
              <NavLinks to="contact"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-50}
              >
                CONTACT
              </NavLinks>
            </li>
          </Menu>
        </Navbar>
        {click 
          ? <FaTimes size={30} onClick={handleClick} />
          : <FaBars size={30} onClick={handleClick} />
        }
      </Header>
    </>
  );
}

export default Nav;
