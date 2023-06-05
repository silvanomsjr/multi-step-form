import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 720px;
  position: relative;
  display: flex;

  @media(min-width: 768px){
    padding: 1rem;
    min-height: unset;
    border-radius: 8px;
    max-width: 810px;
    background: #fff;
    max-height: 601px;
  }

`
