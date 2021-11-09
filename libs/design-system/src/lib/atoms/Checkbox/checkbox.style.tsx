import styled from 'styled-components';
import Typography from '../Typography';
import { iCheckbox } from './checkbox.interface'

const Checkbox = styled.input<iCheckbox>`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`

const TypographyStyled = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary100};
`

const CheckboxDiv = styled.div`
  position: relative;

  width: 20px;
  height: 20px;
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayscale400};

  * {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const Label = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  
  ${Checkbox} {
    & ~ ${TypographyStyled} {
      color: ${({ theme }) => theme.colors.grayscale500};
    }

    &:checked {
      & ~ ${TypographyStyled} {
        color: ${({ theme }) => theme.colors.grayscale900};
      }

      & ~ ${CheckboxDiv} {
        background-color: ${({ theme }) => theme.colors.primary600};
        background-image: url("../Icon/icons/check.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    &:disabled {
      & ~ ${TypographyStyled} {
        color: ${({ theme }) => theme.colors.grayscale400};
      }

      & ~ ${CheckboxDiv} {
        background-color: ${({ theme }) => theme.colors.grayscale300};
        background-image: none;
      }

      &:checked {
        & ~ ${TypographyStyled} {
          color: ${({ theme }) => theme.colors.grayscale400};
        }

        & ~ ${CheckboxDiv} {
          background-color: ${({ theme }) => theme.colors.grayscale300};
          background-image: url("../Icon/icons/check.png");
          background-repeat: no-repeat;
          background-size: cover;
        }

      }

    }
  }

  cursor: pointer;
`

export default {
  Typography: TypographyStyled,
  CheckboxDiv,
  Checkbox,
  Flex,
  Label,
}
