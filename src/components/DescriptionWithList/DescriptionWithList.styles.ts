import styled from 'styled-components'

type StyleItemListprops = {
  numberitem: number
}

export const StyleDescriptionWithList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  > ul {
    margin: 0;
    lighting-color: red;
    text-decoration: none;
  }
`

export const StyleItemList = styled.li<StyleItemListprops>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &.disc::before {
    content: '•';
    color: ${({ theme }) => theme.violet500};
    display: inline-block;
    font-size: 2rem;
    width: 25px;
  }

  &.number::before {
    content: '${(p) => p.numberitem}';
    color: ${({ theme }) => theme.violet500};
    display: inline-block;
    font-size: 1rem;
    width: 25px;
  }
`
