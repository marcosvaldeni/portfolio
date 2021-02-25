import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.40);
  backdrop-filter: blur(10px);
  color: #fff;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 900;
      margin-left: 10px;
    }
  }

  svg {
    cursor: pointer;
  }

  @media (min-width: 576px) {
    padding: 0 20px;

    div {

      h1 {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 768px) {

    svg {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    padding: 0 10%;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  background: rgba(0, 0, 0, 0.80);
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50px;
  right: ${({click}) => (click ? 0 : '-110%')};

  transition: all 1s;

  @media (min-width: 768px) {
    height: initial;
    position: initial;
    width: initial;
    background: initial;
  }
`;

export const Menu = styled.ul`
  list-style: none;

  li {
    text-align: center;
    margin: 30px 0;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {

      & + li {
        margin-left: 30px;
      }
    }
  }

  @media (min-width: 992px) {
    li {

      & + li {
        margin-left: 30px;
      }
    }
  }
`;

export const NavLinks = styled(LinkScroll)`
    cursor: pointer;

  /* &.active {
    background: #fff; 
    color: #333;
  } */
`;
