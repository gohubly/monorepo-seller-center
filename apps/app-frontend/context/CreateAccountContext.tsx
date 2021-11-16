import React, { useState } from 'react';

const CreateAccountContextInitialValues: iCreateAccountContext = {
  actualStep: 'COMPANY_DETAILS',
  setActualStep: () => null,
  values: {},
  setValues: () => null,
  resetContext: () => null,
}

export const CreateAccountContext = React.createContext<iCreateAccountContext>(CreateAccountContextInitialValues);

export const CreateAccountContextProvider: React.FC = ({ children }) => {
  const [actualStep, setActualStep] = useState<iCreateAccountContextSteps>(CreateAccountContextInitialValues.actualStep)
  const [values, setValues] = useState(CreateAccountContextInitialValues.values)

  // TODO: Setup form values & interface

  const resetContext = () => {
    setActualStep(CreateAccountContextInitialValues.actualStep)
    setValues(CreateAccountContextInitialValues.values)
  }

  const providerValue = {
    actualStep,
    setActualStep,
    values,
    resetContext,
    setValues,
  };

  return (
    <CreateAccountContext.Provider value={providerValue}>
      {children}
    </CreateAccountContext.Provider>
  );
};