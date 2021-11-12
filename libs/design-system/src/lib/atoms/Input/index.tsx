import styled from './input.style'

import { iInputComponent } from './input.interface'
import Typography from '../Typography'
import { Flex } from '..'

export const Input: React.FC<iInputComponent> = ({
  prefix,
  suffix,
  iconLeft,
  iconRight,
  Size = 'medium',
  error,
  disabled,
  onChange,
  value,
  placeholder,
  label,
  name,
  onBlur,
  type,
}) => {
  const props = {
    prefix,
    suffix,
    iconLeft,
    iconRight,
    placeholder,
    value,
    error,
    disabled,
    name,
    onChange,
    onBlur,
    type,
  }

  return (
    <Flex fullWidth flexDirection="column" gap={8}>
      {label && <Typography size="small" textTransform="uppercase" color="grayscale900" weight='500'>{label}</Typography>}
      <styled.Input Size={Size} {...props} />
    </Flex>
  )
}
