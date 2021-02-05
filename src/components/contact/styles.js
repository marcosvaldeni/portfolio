import styled from 'styled-components';

export const Background = styled.section`
  margin-top: 50px;
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
  margin-top: 60px;
  background: #333;

  div {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
  background: #a8a8a8;
  border-radius: 50px;
`;