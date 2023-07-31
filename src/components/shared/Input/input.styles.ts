import styled from 'styled-components'

export const StylesInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 20px 15px;
  background-color: ${(p) => p.theme.gray100};

  > input {
    background-color: transparent;
    height: 50px;
    width: 100%;
    outline: none;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${(p) => p.theme.black};

    ::placeholder {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 425px) {
    > input {
      height: 30px;
    }
    padding: 5px 5px;
  }
`
