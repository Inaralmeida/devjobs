import styled from "styled-components";

export const StyleHeaderJob = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 8px 8px 8px;
  position: relative;
  top: -45px;
  background-color: ${({ theme }) => theme.gray100};

  > div{
    width: calc(100% - 140px) ;
    padding: 42px 40px;
    display: flex;
  align-items: center;
  justify-content: space-between;
  }
`