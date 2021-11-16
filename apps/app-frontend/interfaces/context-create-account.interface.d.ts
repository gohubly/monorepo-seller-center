type iCreateAccountContextSteps = 'COMPANY_DETAILS' | 'SERVICE_POINT' | 'INVITE_TEAMMATES'

interface iCreateAccountContext {
  resetContext: () => void
  actualStep: iCreateAccountContextSteps
  setActualStep: (newStep: iCreateAccountContextSteps) => void
  values: iCreateAccountForm
  setValues: (newValues: iCreateAccountForm) => void
}
