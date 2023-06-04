import styled from "styled-components";

export const StylesButton = styled.button`
  padding: 16px 32px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  border-radius: 5px;
  outline: none;
  border:none;
  transition: background 0.3s;

  &.primary{
    background-color: ${p => p.theme.violet500};
    color: #fff;
    :hover{
    background-color: ${p => p.theme.violet100};
  }
  }

  &.secondary{
    background-color: ${p => p.theme.button};
    color: ${p => p.theme.textButton};
    :hover{
    background-color: ${p => p.theme.hover};
  }
  }

`