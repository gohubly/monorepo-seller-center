import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import theme from './theme'


const ThemeProvider: React.FC<iComponent> = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider
export type iTheme = typeof theme