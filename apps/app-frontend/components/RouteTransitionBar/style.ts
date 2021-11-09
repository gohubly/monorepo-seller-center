import styled from 'styled-components'

const Bar = styled.div<{ percentage }>`
  position: absolute;
  
  background: ${({ theme }) => theme.colors.grayscale500};

  height: 3px;
  width: 100vw;
`

const style = {
  Bar
}
export default style