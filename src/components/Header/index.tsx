import { Link } from 'react-router-dom'
import { images } from '../../assets/logos/images'
import ChangeTheme from '../ChangeTheme'
import { StylesHeader } from './header.styles'

const Header = ({ setTheme }: { setTheme: () => void }) => {
  return (
    <StylesHeader>
      <div className="content">
        <Link to="/">
          <img src={images.logo} alt="logo devjobs" />
        </Link>
        <ChangeTheme setTheme={setTheme} />
      </div>
    </StylesHeader>
  )
}

export default Header
