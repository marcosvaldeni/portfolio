import styled from 'styled-components';

import bg from '../../img/bg-01.jpg';

export const Backgrond = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${bg}) no-repeat center center / cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 10px;
  background: rgba(0, 0, 0, .6);

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 100;
    letter-spacing: 4px;
    color: #fff;
    margin-bottom: 30px;
  }

  p {
    font-size: 12px;
    font-weight: 100;
    color: #fff;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 32px;
    }
    p {
      font-weight: 100;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 42px;
    }
    p {
      font-size: 16px;
      font-weight: 300;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 52px;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 64px;
    }
  } 
`;