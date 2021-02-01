import styled from 'styled-components';

export const Container = styled.section`
  max-width: 920px;
  margin: 0 auto;
  padding: 50px 10px;
  text-align: center;

  p {
    font-weight: 300;
    margin-bottom: 50px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const Main = styled.div`
  width: 70%;

`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-template-rows: repeat(auto-fit, 50px);
  grid-gap: 20px;

  img {
    width: 50px;
  }
`;

export const Aside = styled.aside`
  width: 30%;
  text-align: center;

  ul {
    li {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 25%;
        margin-bottom: 4px;
      }
    }
  }
`;

