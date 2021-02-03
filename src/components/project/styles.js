import styled from 'styled-components';

import bg from '../../assets/temp/01.jpg';

export const Background = styled.section`
  min-height: 100vh;
  max-width: 100%;
  margin: 0 3vw;
  padding: 0 20px;
  padding-top: 50px;
  text-align: center;

  h2 {
    padding-bottom: 30px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 30%;
  height: 300px;
  border-radius: 10px;
  background: url(${bg}) no-repeat center center / cover;
  margin-bottom: 30px;

  & + div {
    margin-left: 35px;
  }

  div {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    
    div {
      height: 100%;
      width: 100%;
      border-radius: 10px;
      visibility: hidden;
      transition: all 0.2s;
    }

    &:hover div {
      visibility: visible;
      // background: black;
      backdrop-filter: blur(20px);
    }
  }
`;

