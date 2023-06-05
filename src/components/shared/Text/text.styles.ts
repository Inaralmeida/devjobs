import styled from 'styled-components'

export const StyleText = styled.p`
  &.title {
    font-size: 28px;
    line-height: 34px;
    color: ${(p) => p.theme.black};
    font-weight: 700;
  }

  &.subtitle {
    font-size: 24px;
    line-height: 29px;
    color: ${(p) => p.theme.black};
    font-weight: 600;
  }

  &.paragraph {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${(p) => p.theme.gray600};
  }

  &.link {
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    color: ${(p) => p.theme.violet500};
  }
`
