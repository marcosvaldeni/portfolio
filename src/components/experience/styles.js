import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  max-width: 920px;
  margin: 0 auto;
  padding: 50px 15px;
  text-align: center;

  div {
    p {
      font-weight: 300;
      margin-bottom: 50px;
    }
  }

  @media (min-width: 992px) {
    div {
      height: 200px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Main = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 70%;
  }
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(auto-fit, 100px);

  div {
    height: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 70%;
    }
  }
`;

export const Aside = styled.aside`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    li {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;

      & + li {
      margin-left: 50px;
    }

      img {
        width: 65px;
        margin-bottom: 4px;
      }
    }
  }

  @media (min-width: 992px) {
    width: 30%;
    margin-bottom: 0;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        & + li {
          margin-left: initial;
        }

      img {
        width: 40%;
        margin-bottom: 4px;
      }
    }
  }
  }
`;

