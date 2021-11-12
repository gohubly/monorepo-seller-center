import styled from 'styled-components';

export interface iFlex {
  flex?: number
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
  flexGrow?: number
  flexShrink?: number
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'end' | 'start' | 'stretch'
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'end' | 'start' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly'
  gap?: number
  fullHeight?: boolean
  fullWidth?: boolean
}

export const Flex = styled.div<iFlex>`
  display: flex;

  height: ${({ fullHeight }) => fullHeight ? '100%' : 'auto'};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};

  flex: ${({ flex }) => flex};
  -webkit-flex: ${({ flex }) => flex};
  -ms-flex: ${({ flex }) => flex};

  flex-direction: ${({ flexDirection }) => flexDirection};
  -webkit-flex-direction: ${({ flexDirection }) => flexDirection};
  -ms-flex-direction: ${({ flexDirection }) => flexDirection};

  flex-grow: ${({ flexGrow }) => flexGrow};
  -webkit-flex-grow: ${({ flexGrow }) => flexGrow};
  -ms-flex-grow: ${({ flexGrow }) => flexGrow};

  flex-shrink: ${({ flexShrink }) => flexShrink};
  -webkit-flex-shrink: ${({ flexShrink }) => flexShrink};
  -ms-flex-shrink: ${({ flexShrink }) => flexShrink};

  align-items: ${({ alignItems }) => alignItems};
  -webkit-align-items: ${({ alignItems }) => alignItems};
  -ms-align-items: ${({ alignItems }) => alignItems};

  justify-content: ${({ justifyContent }) => justifyContent};
  -webkit-justify-content: ${({ justifyContent }) => justifyContent};
  -ms-justify-content: ${({ justifyContent }) => justifyContent};
  
  gap: ${({ gap }) => gap}px;
  -webkit-gap: ${({ gap }) => gap}px;
  -ms-gap: ${({ gap }) => gap}px;
`