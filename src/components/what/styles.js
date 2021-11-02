import styled from 'styled-components';

import code from '../../assets/code.jpg';

export const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Background = styled.div`
  padding-top: 40px;
  padding-bottom: 30px;
  background: #F0F0F5;
  text-align: center;

  @media (min-width: 992px) {
    min-height: 70vh;
  }
`;

export const Main = styled.section`
  padding: 0 30px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 992px) { 
    flex-direction: row;
    justify-content: center;
  }
`;

export const Container = styled.div`
  margin: 10px 0;
  max-width: 400px;
  text-align: center;
  padding: 20px 30px;
  background: #fff;
  border-radius:30px;
  flex: 1;

  img {
    height: 35px;
    margin-bottom: 16px;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
  }

  @media (min-width: 992px) {
    min-height: 400px;
    margin: 30px 0;
    max-width: 400px;
    text-align: center;
    padding: 30px;
    background: #fff;
    border-radius:30px;

    & + div {
      margin-left: 40px
    }

    img {
      height: 70px;
      margin-top: 30px;
      margin-bottom: 16px;
    }

    h4 {
      font-size: 18px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;

export const Resume = styled.section`
  background-color: #fff;
  background: url(${code}) no-repeat center center / cover;

  color: #fff;
  text-align: center;

  & > div {
    height: 30vh;
    padding: 70px 0;
    background: rgba(0,0,0,0.6);

    h2 {
      margin-bottom: 30px;
    }

    a {
      height: 76px;
      width: 250px;
      padding: 20px 50px;
      margin-bottom: 10px;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(10px);
      border-radius: 50px;

      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (min-width: 992px) {
    min-height: 30vh;
  }
`;