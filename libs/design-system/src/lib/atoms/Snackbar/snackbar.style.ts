import styled from 'styled-components';
import { iTypographyColors } from '../Typography/typography.interface';
import { iSnackbarVariants } from './snackbar.interface';

const SVG_COLOR_BY_VARIANT: Record<iSnackbarVariants, iTypographyColors> = {
  CRITICAL: 'error500',
  DEFAULT: 'grayscale900',
  INFORMATION: 'primary600',
  SUCCESS: 'success700',
  WARNING: 'warning800',
}

const BACKGROUND_COLOR_BY_VARIANT: Record<iSnackbarVariants, iTypographyColors> = {
  CRITICAL: 'error50',
  DEFAULT: 'grayscale0',
  INFORMATION: 'primary50',
  SUCCESS: 'success50',
  WARNING: 'warning50',
}

const Flex = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;
  
  &:nth-child(2) {
    flex: 1;
  }
`

const Wrapper = styled.div<{ variant: string, margin?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  border-radius: 4px;
  padding: 18px 20px;
  margin: ${({ margin }) => margin}px;

  background: ${({ theme, variant }) => theme.colors[BACKGROUND_COLOR_BY_VARIANT[variant]]};

  svg, path {
    fill: ${({ theme, variant }) => theme.colors[SVG_COLOR_BY_VARIANT[variant]] ?? theme.colors.grayscale900};
  }
`

export default {
  Wrapper,
  Flex,
}