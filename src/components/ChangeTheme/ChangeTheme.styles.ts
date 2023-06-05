import styled from "styled-components";

export const StylesChangeTheme = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:16px;
  color: white;
`

export const Switch = styled.div`
  width: 48px;
  height: 24px;
  border-radius: 84px;
  background-color: #fff;

  display: flex;
  align-items: center;
  padding:5px;
  cursor: pointer;
  


  > span{
    transition: all 0.2s;
    width: 15px;
    height: 15px;
    display: inline-block;
    border-radius: 50%;
    background-color: ${p => p.theme.violet500};
    

    
  &.dark{
    animation: toDark 0.2s both ;
  }

  &.light{
    animation: toLight 0.2s both ;
  }
  }

  @keyframes toDark{
    from{
      transform: translateX(0) ;
    }
    to{
      transform: translateX(22px) ;
    }
 
  }

  @keyframes toLight{
    from{
      transform: translateX(25px) ;
    }
    to{
      transform: translateX(0) ;
    }
 
  }
`