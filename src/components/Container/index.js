import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  max-width: 700px;
  background: #fff;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    display: flex;
    font-size: 20px;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
