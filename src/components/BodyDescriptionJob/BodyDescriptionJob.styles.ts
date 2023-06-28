import styled from "styled-components";

export const StylesBodyDescriptionJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  border-radius: 6px;
  padding: 48px;

  color: ${({ theme }) => theme.black};

`

export const StylesNameJob = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .timeAndContract{
      width: fit-content;
      display: flex;
      align-items: flex-end;
      gap: 5px;
    }
    
    > div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    }
    `