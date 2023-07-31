import styled from 'styled-components'

export const StylesBarSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(p) => p.theme.gray100};
  padding: 2px;
  border-radius: 8px;
  top: -45px;
  padding: 10px 15px 0 15px;
  gap: 20px;

  > section {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .section__name,
  .section__location {
    flex-shrink: 3;
  }

  > section:nth-child(2) {
    border: 1px solid ${(p) => p.theme.gray600};
    border-top: none;
    border-bottom: none;
  }

  .section__checkbox {
    flex-grow: 3;
    width: 50px;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 18px 15px;
    height: 90px;
    background-color: ${(p) => p.theme.gray100};
  }

  @media screen and (max-width: 705px) {
    flex-direction: column;
    width: 90%;

    > section {
      width: 100%;
    }

    > section:nth-child(2) {
      border: 1px solid ${(p) => p.theme.gray600};
      border-left: none;
      border-right: none;
      padding: 12px 0;
    }
  }
`
