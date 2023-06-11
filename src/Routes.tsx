import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import { GlobalStyle } from './styles/GlobalStyle'
import Theme from './styles/theme'
import Header from './components/Header'

const Routes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme.dark}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route element={<Home />} path="/" />
          <Route element={<Jobs />} path="/jobs/:id" />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Routes
