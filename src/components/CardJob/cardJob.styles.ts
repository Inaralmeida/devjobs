import styled from 'styled-components'

export const StylesCardJob = styled.div`
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  background-color: ${(p) => p.theme.gray100};
  flex-direction: column;
  padding: 32px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.6s;

  > picture {
    position: relative;
    top: -55px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    top: -55px;

    > article {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
    }
  }

  :hover {
    transform: scale(1.1);
  }
`
