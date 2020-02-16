import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const Owner = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    color: #666;
    margin-top: 5px;
    font-size: 14px;
    max-width: 400px;
    line-height: 1.4;
    text-align: center;
  }
`;

export const IssueList = styled.ul`
  margin-top: 30px;
  list-style: none;
  padding-top: 30px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px 10px;
    border-radius: 4px;
    border: 1px solid #eee;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          color: #333;
          text-decoration: none;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          color: #333;
          height: 20px;
          font-size: 12px;
          font-weight: 600;
          background: #eee;
          padding: 3px 4px;
          margin-left: 10px;
          border-radius: 2px;
        }
      }

      p {
        color: #999;
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }
`;
