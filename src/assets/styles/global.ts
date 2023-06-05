import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  body{
    background-color: hsl(217, 100%, 97%);
  }

  #root{
    width: 100%;
    height: 100vh;

    @media(min-width: 768px){
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`
