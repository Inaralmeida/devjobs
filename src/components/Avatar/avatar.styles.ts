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
  }

  &.large {
    width: 140px;
    height: 140px;
    border-radius: 0 0 0 6px;
  }

  > img {
    width: 80%;
  }
`
