import { ThemeProvider } from 'styled-components'
// import { Button } from './components/Button'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  //* o ThemeProvider pode ficar dentro ou fora do BrowserRouter
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />

        {/* <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button /> */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
