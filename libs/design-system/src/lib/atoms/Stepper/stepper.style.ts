import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
`

const ProgressBar = styled.div<{ active: boolean, completed: boolean, isNextStepActive: boolean }>`
  position: relative;
  top: 50%;
  left: 0%;

  height: 2px;
  flex: 1;

  z-index: 0;

  background: ${({ theme, active, isNextStepActive, completed }) => {
    if (isNextStepActive) return `linear-gradient(90deg, ${theme.colors.success700} 0%, ${theme.colors.primary600} 100%);`
    if (active) return `linear-gradient(90deg, ${theme.colors.primary600} 0%, ${theme.colors.primary600} 40%, ${theme.colors.grayscale300} 55%);`
    if (completed) return theme.colors.success700

    return theme.colors.grayscale300
  }};
`

const StepWrapper = styled.div<{ active: boolean, completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;
  
  border-radius: 100%;
  border: 1px solid ${({ theme, active, completed }) => completed ? theme.colors.success700 : active ? theme.colors.primary600 : theme.colors.grayscale300};
  background: ${({ theme, active, completed }) => completed ? theme.colors.success700 : active ? theme.colors.primary600 : theme.colors.white};
  
  z-index: 1;
`

export default {
  StepWrapper,
  ProgressBar,
  Container,
}