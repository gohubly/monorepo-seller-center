interface iAuthentication {
  name: string
}

interface iAuthenticationContext {
  isAuthenticated: boolean
  authentication: iAuth | null
  setAuthentication: (auth: iAuth) => void
  clearAuthentication: () => void
}
