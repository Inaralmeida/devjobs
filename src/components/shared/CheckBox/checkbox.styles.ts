import styled from 'styled-components'

export const StyleCheckBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 5px;
  flex-direction: column;

  @media screen and (max-width: 890px) {
    display: none;
  }
`

export const StyleOptionCheckBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  cursor: pointer;

  color: ${(p) => p.theme.black};

  > span {
    width: 24px;
    height: 24px;
    border-radius: 3px;
    background-color: ${(p) => p.theme.gray600};
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s;

    &.active {
      background-color: ${(p) => p.theme.violet500};
      opacity: 1;
    }

    :hover {
      opacity: 1;
      background-color: ${(p) => p.theme.violet100};
    }
  }
`
