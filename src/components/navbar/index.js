import React, { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import logoImg from '../../img/logo.svg';

import { Header, Menu, Navbar } from './styles';

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
              ABOUT
            </li>
            <li>
              PASSION
            </li>
            <li>
              EXPERIENCE
            </li>
            <li>
              WORK
            </li>
            <li>
              CONTACT
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
