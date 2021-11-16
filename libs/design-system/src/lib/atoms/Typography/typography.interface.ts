import theme from '../../theme/theme'

export type iTypographyHeadlines = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
export type iTypographyAs = 'span' | 'p' | iTypographyHeadlines
export type iTypographySizes = 'small' | 'medium' | 'large'
export type iTypographyWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
export type iTypographyTextAlignment = 'center' | 'left' | 'right'
export type iTypographyColors = keyof typeof theme.colors
export type iTypographyTextTransform = 'uppercase' | 'lowercase'

export interface iTypography {
  children: string | number
  as?: iTypographyAs;
  color?: iTypographyColors;
  size?: iTypographySizes;
  textAlign?: iTypographyTextAlignment;
  weight?: iTypographyWeight;
  textTransform?: iTypographyTextTransform;
  onClick?: () => void
}