import styled from 'styled-components'

export const StyleHeaderJob = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 8px 8px 8px;
  position: relative;
  padding: 0;
  top: -45px;
  background-color: ${({ theme }) => theme.gray100};

  > div {
    width: calc(100% - 140px);
    padding: 42px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .thumb {
    display: none;
  }
  .large {
    display: flex;
  }

  @media screen and (max-width: 575px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    > div {
      position: relative;
      top: -13px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 20px;

      > section{
        text-align: center;
      }
    }

    .thumb {
      display: flex;
      position: relative;
      top: -13px;
    }
    .large {
      display: none;
    }
  }
`
