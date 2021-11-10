import styled from './header.style'
import { iHeader } from './header.interface'
import { Icon } from '../Icon'

export const Header: React.FC<iHeader> = ({
  children,
}) => {
  return (
    <styled.Wrapper>
      <Icon id="logo" />
      <styled.Children>
        {children}
      </styled.Children>
    </styled.Wrapper>
  )
}
