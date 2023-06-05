import { StyleText } from './text.styles'

type TextProps = {
  fontSize?: string
  as: 'title' | 'subtitle' | 'paragraph' | 'link'
} & React.HtmlHTMLAttributes<HTMLParagraphElement>

const Text = ({ fontSize, as = 'paragraph', ...rest }: TextProps) => {
  return (
    <StyleText
      {...rest}
      className={as}
      style={fontSize ? { fontSize: fontSize } : {}}
    >
      {rest.children}
    </StyleText>
  )
}

export default Text
