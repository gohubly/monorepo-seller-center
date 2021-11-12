import { useMemo } from 'react'
import { Icon, Typography } from '../'
import { Button } from '../Button'
import { iIconTypes } from '../Icon/icon.interface'
import { iTypographyColors } from '../Typography/typography.interface'
import { iSnackBar } from './snackbar.interface'
import styled from './snackbar.style'

export const SnackBar: React.FC<iSnackBar> = ({
  variant = 'DEFAULT',
  button,
  label,
  close,
  margin,
}) => {
  const ICON_ID_BY_VARIANT: iIconTypes = useMemo(() => {
    switch(variant) {
      case 'DEFAULT':
        return 'bell'
      case 'INFORMATION':
        return 'info'
      case 'SUCCESS':
        return 'check'
      case 'WARNING':
        return 'alert'
      case 'CRITICAL':
        return 'denied'
    }
  }, [variant])

  const BUTTON_COLOR_BASED_ON_VARIANT: iTypographyColors = useMemo(() => {
    switch(variant) {
      case 'DEFAULT':
        return 'primary50'
      case 'INFORMATION':
        return 'primary600'
      case 'SUCCESS':
        return 'success700'
      case 'WARNING':
        return 'warning700'
      case 'CRITICAL':
        return 'error500'
    }
  }, [variant])

  return (
    <styled.Wrapper variant={variant} margin={margin}>
      <styled.Flex>
        <Icon id={ICON_ID_BY_VARIANT} />

        {typeof label === 'string'
          ? <Typography color='grayscale700'>{label}</Typography>
          : {label}
        }

        {close && <Icon id='close' />}
      </styled.Flex>
      {button && (
        <Button onClick={button.onClick} color={BUTTON_COLOR_BASED_ON_VARIANT} size="small">
          {button.label}
        </Button>
      )}
    </styled.Wrapper>
  )
}
