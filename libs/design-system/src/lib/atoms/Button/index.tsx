import React from 'react'
import { Icon } from '../Icon'

import { iButton } from './button.interface'
import styled from './button.style'

export const Button: React.FC<iButton> = ({ 
  children,
  onClick,
  size = 'medium',
  iconLeft,
  iconRight,
  disabled,
  variant = 'primary',
}) => {
  return (
    <styled.Button onClick={onClick} disabled={disabled} variant={variant} size={size}>
      {iconLeft && (
        <styled.IconWrapper>
          <Icon id={iconLeft} />
        </styled.IconWrapper>
      )}
      {children}
      {iconRight && (
        <styled.IconWrapper>
          <Icon id={iconRight} />
        </styled.IconWrapper>
      )}
    </styled.Button>
  )
}
