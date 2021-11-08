import styled from './input.style'

import { iInputComponent } from './input.interface'

export const Input: React.FC<iInputComponent> = ({
  prefix,
  suffix,
  iconLeft,
  iconRight,
  size = 'medium',
  error,
  disabled,
  onChange,
  value,
  placeholder,
}) => {
  const props = {
    size,
    prefix,
    suffix,
    iconLeft,
    iconRight,
    placeholder,
    value,
    onChange,
    error,
    disabled,
  }
  return (
    <styled.Input {...props} />
  )
}
