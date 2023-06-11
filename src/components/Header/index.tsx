import images from '../../assets/logos/images'
import ChangeTheme from '../ChangeTheme'
import { StylesHeader } from './header.styles'

const Header = () => {
  return (
    <StylesHeader>
      <div className="content">
        <img src={images.logo} alt="logo devjobs" />
        <ChangeTheme />
      </div>
    </StylesHeader>
  )
}

export default Header
