import styled from 'styled-components';

export const Background = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 0 10px;
  padding-top: 50px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    padding-bottom: 30px;
  }

  @media (min-width: 1200px) {
    min-height: 100vh;
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
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
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 30px;
  background: url(/projects/${props => props.img}) no-repeat center center / cover;

  display: flex;
  align-items: flex-end;

  div {
    height: 50px;
    width: 100%;
    border-radius: 10px;
    backdrop-filter: blur(100px);

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 10px 20px;
      border: 1px solid #fff;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.60);
      color: #333;
    }
  }

  @media (min-width: 576px) {
    width: 45%;
    margin: 10px;
  }

  @media (min-width: 992px) {
    width: 30%;
    margin: 15px;
  }

  @media (min-width: 1200px) {
    width: 30%;
    height: 300px;
    border-radius: 10px;

    div {
      visibility: hidden;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      transition: all 0.2s;
      
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover div {
      visibility: visible;
      backdrop-filter: blur(20px);
    }
  }
`;

export const Button = styled.button`
  width: 200px;
  margin: 50px 0;
  padding: 10px;
  border: none;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #4F81BC;
  box-shadow: 0px 10px 20px 3px rgba(104, 171, 247, 0.32);
  cursor: pointer;
`;
