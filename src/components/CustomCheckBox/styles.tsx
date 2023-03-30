import styled from 'styled-components'

export const Input = styled.input``;

export const Container = styled.div`
  width: auto;

  & > input {
    display: none;
  }

  ${Input} + label::before {
    content: '';
    width: 17px;
    height: 17px;
    border-radius: 4px;
    background: #FFF;
    display: inline-block;
    border: 1px solid hsl(229, 24%, 87%);
  }

  ${Input}:checked + label::before {
    background: hsl(243, 100%, 62%);
    border-color: hsl(243, 100%, 62%);
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-position: center;
  }

`
