import { memo } from 'react'
import { iTypography } from './typography.interface'

import styled from './typography.style'

export const Typography: React.FC<iTypography> = ({
  children,
  as = 'span',
  color = 'grayscale900',
  size = 'small',
  textAlign = 'left',
  weight = '500',
}) => {
  const props = {
    size,
    textAlign,
    color,
    weight,
    as,
  }
  switch (as) {
    case 'span':
      return <styled.Span {...props}>{children}</styled.Span>;

    case 'p':
      return <styled.Paragraph {...props}>{children}</styled.Paragraph>;

    case 'h1':
      return <styled.h1 {...props}>{children}</styled.h1>;

    case 'h2':
      return <styled.h2 {...props}>{children}</styled.h2>;

    case 'h3':
      return <styled.h3 {...props}>{children}</styled.h3>;

    case 'h4':
      return <styled.h4 {...props}>{children}</styled.h4>;

    case 'h5':
      return <styled.h5 {...props}>{children}</styled.h5>;
  }
}

export default memo(Typography)