import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 550px;
  position: relative;
  display: flex;

  @media(min-width: 768px){
    padding: 1rem;
    border-radius: 8px;
    max-width: 1000px;
    background: #fff;
    max-height: 560px;
  }

`
