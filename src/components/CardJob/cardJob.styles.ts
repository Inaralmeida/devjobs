import styled from 'styled-components'

export const StylesCardJob = styled.div`
  width: 350px;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  background-color: ${(p) => p.theme.gray100};
  flex-direction: column;
  padding: 32px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.6s;

  > picture {
    display: block;
    position: absolute;
    top: -25px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;

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
