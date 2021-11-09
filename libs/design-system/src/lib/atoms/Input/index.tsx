import styled from './input.style'

import { iInputComponent } from './input.interface'
import Typography from '../Typography'

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
  label,
}) => {
  const props = {
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
    <styled.Flex>
      {label && <Typography size="small" textTransform="uppercase" color="grayscale900" weight='500'>{label}</Typography>}
      <styled.Input size={size as never} {...props} />
    </styled.Flex>
  )
}
