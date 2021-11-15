import styled from './input.style'

import { iInputComponent } from './input.interface'
import Typography from '../Typography'
import { Icon, Flex } from '..'

export const Input: React.FC<iInputComponent> = ({
  prefix,
  suffix,
  iconLeft,
  iconLeftOnClick,
  iconRight,
  iconRightOnClick,
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
    <Flex fullWidth flexDirection="column" gap={8} position="relative">
      {label && <Typography size="small" textTransform="uppercase" color="grayscale900" weight='500'>{label}</Typography>}
      {iconLeft && (
        <styled.LeftIconWrapper onClick={iconLeftOnClick}>
          <Icon id={iconLeft} />
        </styled.LeftIconWrapper>
      )}
      <styled.Input Size={Size} {...props} />
      {iconRight && (
        <styled.RightIconWrapper onClick={iconRightOnClick}>
          <Icon id={iconRight} />
        </styled.RightIconWrapper>
      )}
    </Flex>
  )
}
