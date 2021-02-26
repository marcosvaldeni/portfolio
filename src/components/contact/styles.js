import styled from 'styled-components';

export const Background = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 60px;
  }

  p {
    max-width: 600px;
    padding: 0 20px;
    margin-bottom: 60px;
  }

  div {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    background: #F0F0F5;
    box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.11);
    transition: all 0.5s;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Footer = styled.footer`
  background: #333;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 50px;
    color: #5F5F5F;
  }

  h3 {
    margin: 40px 0;
    color: #fff;
  }
`;

export const Icons = styled.ul`
  max-width: 600px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  li {
    height: 50px;
    width: 50px;
    margin: 0 5px;
    background: #5F5F5F;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 576px) {
    width: 70%;
    max-width: 600px;
  }
  @media (min-width: 768px) {
    width: 50%;
    max-width: 600px;
  }
`;