import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Kumbh Sans', sans-serif; 
  }

  a, button{
    cursor: pointer;
  }

  a{
    list-style: none;
  }

  input, button{
    outline: none;
  }

  body{
    width: 100%;
    min-height: 100vh;
    background-color: ${(p) => p.theme.white};
  }

  li{
    text-decoration-color: ${(p) => p.theme.violet500};
  }

  .content{
    width: 100%;
    max-width: 1440px;
    margin: 0px 100px;
  }
  
`
