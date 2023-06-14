import images from '../../assets/logos/images'
import styled from 'styled-components'

export const StylesHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px 0 85px;
  background-image: url(${images.header});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 0 100px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
