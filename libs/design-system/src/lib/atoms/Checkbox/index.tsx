import { useState } from 'react'
import { Icon } from '../Icon'
import { iCheckbox } from './checkbox.interface'

import styled from './checkbox.style'

export const Checkbox: React.FC<iCheckbox> = ({
  children,
  checked: initialCheck,
  onChange: handleOnChange,
  disabled,
}) => {
  const [checked, setChecked] = useState(initialCheck)

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleOnChange && handleOnChange(evt)
    setChecked(!checked)
  }

  return (
    <styled.Flex>
      <styled.Label htmlFor="checkbox-id">
        <styled.Checkbox checked={checked} id="checkbox-id" type="checkbox" onChange={onChange} disabled={disabled} />
        <styled.CheckboxDiv>
          <Icon id="check" />
        </styled.CheckboxDiv>
        <styled.Typography color={checked ? 'grayscale900' : 'grayscale500'} weight='500' size="small">{children}</styled.Typography>
      </styled.Label>
    </styled.Flex>
  )
}