import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 30px;

  input {
    flex: 1;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid #eee;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading
  }))`
  border: 0;
  display: flex;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  background: #7159c1;
  align-items: center;
  justify-content: center;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${props => props.loading && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
