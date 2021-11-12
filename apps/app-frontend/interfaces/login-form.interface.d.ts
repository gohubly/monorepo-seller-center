interface iLoginForm extends iComponent {
  initialValues?: string
}


interface iUseLoginFormLogic {
  handleSubmitForm: (value: Record<string, iAny>) => void
  service: iUseServiceOmits
}