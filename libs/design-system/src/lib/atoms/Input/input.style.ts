import styled from 'styled-components';
import { iInput, iInputSizes } from './input.interface'

const FONT_SIZE_BASED_ON_SIZE: Record<iInputSizes, string> = {
  large: '16px',
  medium: '16px',
}
const PADDING_BASED_ON_SIZE: Record<iInputSizes, string> = {
  large: '16px',
  medium: '12px 16px',
}

const Input = styled.input<iInput>`
  outline: none;
  padding: ${({ size }) => PADDING_BASED_ON_SIZE[size]};

  font-size: ${({ size }) => FONT_SIZE_BASED_ON_SIZE[size]};
  color: ${({ theme }) => theme.colors.grayscale500};

  border: 1px solid ${({ theme }) => theme.colors.grayscale400};
  border-radius: 4px;

  transition: all 0.1s linear;
  
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.grayscale400};
  }
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary600};
    color: ${({ theme }) => theme.colors.grayscale900};
  }
  
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.grayscale500};
    color: ${({ theme }) => theme.colors.grayscale900};
  }
  
  &:disabled {
    border: 1px solid ${({ theme }) => theme.colors.grayscale500};
    color: ${({ theme }) => theme.colors.grayscale500};
  }
  
  &:error {
    border: 1px solid ${({ theme }) => theme.colors.error500};
    color: ${({ theme }) => theme.colors.grayscale900};
  }
`

export default {
  Input,
}
