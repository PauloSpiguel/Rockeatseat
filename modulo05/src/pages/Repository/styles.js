import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    border-radius: 50%;
    width: 120px;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    color: #666;
    margin-top: 5px;
    max-width: 400px;
    text-align: center;
    line-height: 1.4em;
  }
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    border: 1px solid #eee;
    padding: 15px 10px;
    border-radius: 4px;

    flex-direction: row;
    align-items: center;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        span {
          background: #7159c1;
          color: #eee;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          margin-left: 10px;
          padding: 3px 4px;
          border-radius: 2px;
        }
      }

      a {
        text-decoration: none;
        color: #333;
      }

      & a:hover {
        color: #7159c1;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
