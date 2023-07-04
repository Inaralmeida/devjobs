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
    width: 90%;
    max-width: 1200px;
    margin: 0px 100px;
  }
  
  .container{
    width: 100%;
    min-height: calc(100vh - 162px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 50px;
  }
`
