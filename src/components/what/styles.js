import styled from 'styled-components';

export const Background = styled.div`
  padding-top: 40px;
  padding-bottom: 30px;
  background: #F0F0F5;
  text-align: center;
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
  background: #fff;
  text-align: center;
  margin: 50px 0;

  h2 {
    margin-bottom: 30px;

  }

  button {
    height: 50px;
    width: 280px;
    margin-bottom: 10px;
    background: #F0F0F5;
    border: 2px solid #333;
    border-radius: 20px;

    font-weight: 700;
    color: #333;
    cursor: pointer;
  }
`;