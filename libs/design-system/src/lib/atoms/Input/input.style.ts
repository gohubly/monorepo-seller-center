import styled, { css } from 'styled-components';
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
  padding: ${({ Size }) => PADDING_BASED_ON_SIZE[Size]};
  padding-left: ${({ iconLeft }) => iconLeft ? '56px' : 'auto'};
  padding-right: ${({ iconRight }) => iconRight ? '56px' : 'auto'};

  font-size: ${({ Size }) => FONT_SIZE_BASED_ON_SIZE[Size]};
  color: ${({ theme }) => theme.colors.grayscale900};

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

  &::placeholder, &:-ms-input-placeholder, &::-webkit-input-placeholder { /* Edge */
    color: ${({ theme }) => theme.colors.grayscale500};
  }
`

const RelativeWrapper = styled.div`
  position: relative;

  display: flex;
  width: 100%;
`

const IconWrapper = css<{ onClick?: () => void }>`
  position: absolute;
  top: calc(50% + 12px);
  transform: translateY(-50%);

  cursor: ${({ onClick }) => onClick ? 'pointer' : 'auto'};
`

const LeftIconWrapper = styled.div`
  ${IconWrapper}
  left: 14px;
`


const RightIconWrapper = styled.div`
  ${IconWrapper}
  right: 14px;
`


export default {
  RelativeWrapper,
  RightIconWrapper,
  LeftIconWrapper,
  Input,
}
