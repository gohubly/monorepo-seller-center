interface iLoginForm extends iComponent {
  initialValues?: string
}


interface iUseLoginFormLogic {
  handleSubmitForm: (value: Record<string, iAny>) => void
  handleToggleShowPassword: () => void
  showPassword: boolean
  service: iUseServiceOmits
}