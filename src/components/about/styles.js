import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 40px 20px 0 20px;
  background: #F0F0F5;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 120px;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  p {
    max-width: 760px;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const Section = styled.div`
  width: 100%;
  max-width: 760px;
  margin-top: 30px;
  margin-bottom: 60px;
  padding: 35px 50px;
  background: #fff;
  border-radius: 30px;

  ul {
    list-style: none;
  }

  li {
    font-size: 14px;
    font-weight: 300;

    flex: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: 50px;
    }

    span {
      display: block;
    }

    & + li {
      margin-top: 32px;
    }
  }

  @media (min-width: 576px) {
    ul {
      display: flex;
      justify-content: space-between;

      li {
        margin-top: 0;
      }

    }

  }
`;

