import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme.ts'
import { GlobalStyle } from './styles/GlobalStyle.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme.dark}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
