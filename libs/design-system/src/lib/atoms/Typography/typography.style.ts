import styled, { css } from 'styled-components'
import { iTypographyHeadlines, iTypographySizes } from './typography.interface'

interface iTypographyComponent {
  textTransform?: string
  as: string
  size: string
  textAlign: string
  color: string
  weight: string
  pointer?: boolean
}

const SPAN_FONT_SIZE_BASED_ON_SIZE: Record<iTypographySizes, string> = {
  large: '16px',
  medium: '14px',
  small: '12px',
}

const PARAGRAPH_FONT_SIZE_BASED_ON_SIZE: Record<iTypographySizes, string> = {
  large: '16px',
  medium: '14px',
  small: '12px',
}

const TypographyCss = css<iTypographyComponent>`
  font-style: normal;
  font-weight: ${({ weight }) => weight};
  
  color: ${({ color, theme }) => color ? theme.colors[color] : ''};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  
  cursor: ${({ pointer }) => pointer ? 'pointer' : 'inherit'};
`

const Span = styled.span<iTypographyComponent>`
  ${TypographyCss}
  font-size: ${({ size }) => SPAN_FONT_SIZE_BASED_ON_SIZE[size]};
`

const Paragraph = styled.p<iTypographyComponent>`
  ${TypographyCss}
  font-size: ${({ size }) => PARAGRAPH_FONT_SIZE_BASED_ON_SIZE[size]};
`

const HEADLINE_FONT_SIZE_BASED_ON_SIZE: Record<iTypographyHeadlines, string> = {
  h1: '40px',
  h2: '32px',
  h3: '24px',
  h4: '20px',
  h5: '18px',
}

const HeadLine = css<iTypographyComponent>`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  
  font-size: ${({ as }) => HEADLINE_FONT_SIZE_BASED_ON_SIZE[as]};

  color: ${({ color, theme }) => theme.colors[color]};
  text-align: ${({ textAlign }) => textAlign};

  cursor: ${({ pointer }) => pointer ? 'pointer' : 'inherit'};
`

const h1 = styled.h1`${HeadLine}`
const h2 = styled.h2`${HeadLine}`
const h3 = styled.h3`${HeadLine}`
const h4 = styled.h4`${HeadLine}`
const h5 = styled.h5`${HeadLine}`

const style = {
  Span,
  Paragraph,
  h1,
  h2,
  h3,
  h4,
  h5,
}

export default style