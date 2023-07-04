import styled from 'styled-components'

export const StylesFooterJob = styled.footer`
  width: 100%;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
