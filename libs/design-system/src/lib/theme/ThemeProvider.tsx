import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import theme from './theme'

export const DesignSystemThemeProvider: React.FC<iComponent> = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}
