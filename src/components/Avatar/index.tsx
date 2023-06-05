import { StylesAvatar } from './avatar.styles'

type AvatarProps = {
  type: 'thumb' | 'large'
  src: string
  alt: string
  background: string
}

const Avatar = ({ type, src, alt, background }: AvatarProps) => {
  return (
    <StylesAvatar className={type} background={background}>
      <img src={src} alt={alt} />
    </StylesAvatar>
  )
}

export default Avatar
