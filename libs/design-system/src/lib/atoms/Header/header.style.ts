import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  gap: 48px;

  padding: 24px 48px;

  background: ${({ theme }) => theme.colors.white};
`

const Children = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
`

export default {
  Children,
  Wrapper,
}