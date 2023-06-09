import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #0288D1;
  color: white;
  border: 2px solid #1976D2;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: #04b6fe;
    border-color: #04b6fe;
  }

  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 742px) {
        margin-top: 16px;
      }
    `}

  ${(props) =>
    props.phone &&
    css`
      @media (max-width: 358px) {
        margin-top: 16px;
        width: 80%;
      }
    `}

  &.buttonRandom {
    margin-left: 32px;

    ${(props) =>
      props.portatil &&
      css`
        @media (max-width: 968px) {
          margin-top: 16px;
          margin-left: 0;
        }
      `}
  }
`;

const Input = styled.input`
  padding: 8px 16px;
  border: 0;
  width: 610px;
  height: 50px;

  &:focus {
    outline: none;
    text-shadow: 0 0 30px #04b6fe;
    box-shadow: 0 0 30px #04b6fe;
  }
`;

export { Button, Input };
