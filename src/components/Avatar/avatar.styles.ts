import styled from 'styled-components'

type StylesAvatarProps = {
  background: string
}

export const StylesAvatar = styled.div<StylesAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.background};

  &.thumb {
    width: 50px;
    height: 50px;
    border-radius: 15px;

    > img {
    width: 80%;
  }
  }

  &.large {
    width: 140px;
    height: 140px;
    border-radius: 0 0 0 6px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
    transform: scale(2.8);
      
    }

  }

  
`
