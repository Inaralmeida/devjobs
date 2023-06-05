import { Moon, Sun } from '@phosphor-icons/react'
import { StylesChangeTheme, Switch } from './ChangeTheme.styles'
import { useState } from 'react'

const ChangeTheme = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const handleSetTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <StylesChangeTheme>
      <Sun size={24} weight="fill" color="#fff" />
      <Switch onClick={handleSetTheme}>
        <span className={theme}></span>
      </Switch>
      <Moon size={24} weight="fill" color="#fff" />
    </StylesChangeTheme>
  )
}

export default ChangeTheme
