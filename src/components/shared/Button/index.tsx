import { StylesButton } from './button.styles'

type ButtonProps = {
  label?: string
  variant?: 'primary' | 'secondary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  label = 'Button',
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <StylesButton className={variant} {...rest}>
      {label}
    </StylesButton>
  )
}

export default Button
