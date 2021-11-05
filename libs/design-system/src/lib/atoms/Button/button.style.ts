import styled from 'styled-components'
import { iButton, iButtonSizes, iButtonVariants } from './button.interface'

const PADDING_BY_SIZE: Record<iButtonSizes, string> = {
  large: '16px 24px',
  medium: '12px 20px',
  small: '12px 16px',
}
const FONT_SIZE_BY_SIZE: Record<iButtonSizes, string> = {
  large: '14px',
  medium: '14px',
  small: '12px',
}
const FONT_COLOR_BY_VARIANT: Record<iButtonVariants, string> = {
  danger: 'white',
  primary: 'white',
  secondary: 'primary700',
  ghost: 'primary700',
}
const DEFAULT_BACKGROUND_BY_VARIANT: Record<iButtonVariants, string> = {
  danger: 'error500',
  primary: 'primary600',
  secondary: 'primary50',
  ghost: 'white',
}
const BORDER_COLOR_BY_VARIANT: Record<iButtonVariants, string> = {
  danger: 'grayscale900',
  primary: 'primary900',
  secondary: 'transparent',
  ghost: 'transparent',
}

const HOVER_BACKGROUND_BY_VARIANT: Record<iButtonVariants, string> = {
  danger: 'error400',
  primary: 'primary500',
  secondary: 'primary50',
  ghost: 'primary50',
}

const FOCUS_BACKGROUND_BY_VARIANT: Record<iButtonVariants, string> = {
  danger: 'error500',
  primary: 'primary600',
  secondary: 'primary50',
  ghost: 'transparent',
}

const DISABLED_BACKGROUND_BY_VARIANT: Record<iButtonVariants, string> = {
  danger: 'transparent',
  primary: 'grayscale100',
  secondary: 'grayscale100',
  ghost: 'transparent',
}

const DISABLED_FONT_COLOR_BACKGROUND_BY_VARIANT: Record<iButtonVariants, string> = {
  danger: 'grayscale500',
  primary: 'grayscale500',
  secondary: 'grayscale500',
  ghost: 'grayscale500',
}

const ICON_BACKGROUND_BY_SIZES: Record<iButtonSizes, string> = {
  large: '20px',
  medium: '15px',
  small: '12px',
}

const IconWrapper = styled.div`
`

const Button = styled.button<iButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  outline: none;
  border: none;
  margin: 0;

  padding: ${({ size }) => PADDING_BY_SIZE[size]};
  border: 1px solid ${({ variant }) => BORDER_COLOR_BY_VARIANT[variant]};
  border-radius: 4px;

  letter-spacing: 0.012em;
  text-transform: uppercase;
  font-size: ${({ size }) => FONT_SIZE_BY_SIZE[size]};
  color: ${({ variant, theme }) => theme.colors[FONT_COLOR_BY_VARIANT[variant]]};
  
  background: ${({ theme, variant}) => theme.colors[DEFAULT_BACKGROUND_BY_VARIANT[variant]]};

  cursor: pointer;
  transition: all 0.15s linear;

  ${IconWrapper} {
    img, svg {
      height: ${({ size }) => ICON_BACKGROUND_BY_SIZES[size]};
      width: ${({ size }) => ICON_BACKGROUND_BY_SIZES[size]};
    }
  }
  
  &:hover {
    background: ${({ theme, variant}) => theme.colors[HOVER_BACKGROUND_BY_VARIANT[variant]]};

    ${IconWrapper} svg, image {
      fill: ${({ variant }) => FONT_COLOR_BY_VARIANT[variant]};
    }
  }

  &:focus {
    background: ${({ theme, variant}) => theme.colors[FOCUS_BACKGROUND_BY_VARIANT[variant]]};
  }

  &:disabled {
    background: ${({ theme, variant}) => theme.colors[DISABLED_BACKGROUND_BY_VARIANT[variant]]};
    color: ${({ variant, theme }) => theme.colors[DISABLED_FONT_COLOR_BACKGROUND_BY_VARIANT[variant]]};
    cursor: default;
  }
`

export default {
  Button,
  IconWrapper
}