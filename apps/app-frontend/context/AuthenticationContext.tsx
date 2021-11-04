import React, { useState } from 'react';

const AuthenticationContextInitialValues = {
  authentication: null,
  isAuthenticated: false,
  setAuthentication: () => null,
  clearAuthentication: () => null,
}

export const AuthenticationContext = React.createContext<iAuthenticationContext>(AuthenticationContextInitialValues);
 

export const AuthenticationContextProvider: React.FC = ({ children }) => {
  const [authentication, setAuthentication] = useState<iAuthentication | null>(null);
  
  const clearAuthentication = () => {
    // localStorage.clearStorage()
    setAuthentication(AuthenticationContextInitialValues.authentication)
  }

  const providerValue = {
    authentication,
    isAuthenticated: !!authentication,
    setAuthentication,
    clearAuthentication
  };

  return (
    <AuthenticationContext.Provider value={providerValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};