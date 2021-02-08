import styled from 'styled-components';

import bg from '../../img/bg-01.jpg';

export const Temp = styled.div`
  width: 100%;
  min-height: 1000px;
  background: url(${bg}) no-repeat center center / cover;
`;

export const Background = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;
  background: rgba(0, 0, 0, 0.5);

  z-index: 5;
`;

export const Project = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  border-radius: 30px;
  background: #fff;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 700;
  }

  img {
    width: 90%;
    max-width: 660px;
    border-radius: 20px;
    margin-bottom: 40px;
  }

  p {
    width: 90%;
    max-width: 660px;
    margin-bottom: 30px;
  }
`;

export const Container = styled.aside`
  width: 90%;
  max-width: 660px;
  min-height: 100px;
  margin-bottom: 30px;
  padding: 20px 30px;
  background: rgba(79, 129, 188, 0.1);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: space-between;


  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  span {
    margin: 0 3px 3px 3px;
    padding: 5px 10px;
    background: #2B7489;
    color: #fff;
    border-radius: 5px;
    font-weight: 700;
    display: inline-block;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: initial;
    justify-content: space-between;

    & > div {
      width: 45%;
      display: initial;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 18px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    margin-right: 5px;
  }

  &:first-child {
    margin-top: 40px;
  }

  & + button {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Close = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 30px;
  top: 30px;

  svg {
    color: #828282;
  }
`;


