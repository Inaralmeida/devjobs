import React from 'react'
import { StyleText } from './text.styles'

type TextProps = {
  as: 'title' | 'subtitle' | 'paragraph' | 'link'
} & React.HtmlHTMLAttributes<HTMLParagraphElement>

const Text = ({ as = 'paragraph', ...rest }: TextProps) => {
  return (
    <StyleText {...rest} className={as}>
      {rest.children}
    </StyleText>
  )
}

export default Text
